import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
    AxiosStorage,
    CacheRequestConfig,
    setupCache,
} from "axios-cache-interceptor";
import { ClientRequest } from "http";
import { regionAwareKeyGenerator } from "./cache/region-aware-key-generator";
import { buildRegionAwareMemoryStorage } from "./cache/region-aware-memory";
import { buildRegionAwareRedisStorage } from "./cache/region-aware-redis";
import { CacheType, Config, Limit, PaginatedData } from "./model/common";
import { appendQueryString, dateTransformer, getCacheRegion } from "./util";

export class ApiClient {
    readonly axiosInstance: AxiosInstance;
    constructor(private readonly config: Config) {
        this.axiosInstance = Axios.create({
            baseURL: `https://api.bigcommerce.com/stores/${this.config.storeHash}`,
            timeout: this.config.timeout,
            headers: {
                "X-Auth-Token": config.accessToken,
                "Content-Type": "application/json",
                Accept: `application/json`,
            },
        });

        this.axiosInstance.defaults.transformResponse = [dateTransformer];

        if (this.config.cache?.enable) {
            let storage: AxiosStorage;
            if (this.config.cache?.type === CacheType.REDIS) {
                storage = buildRegionAwareRedisStorage(
                    this.config.cache?.redisClientOptions
                );
            } else {
                storage = buildRegionAwareMemoryStorage();
            }
            this.axiosInstance = setupCache(this.axiosInstance, {
                generateKey: regionAwareKeyGenerator,
                storage,
            });
        }
    }

    async get<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        page?: number,
        limit?: number,
        config?: AxiosRequestConfig<D> | CacheRequestConfig<D>
    ): Promise<R> {
        config = this.setupCacheTtlConfig(config);
        if (limit === Limit.ALL || (limit || 0) > Limit.MAX_LIMIT) {
            // fetch data by iterating thru the pagination
            page = page || 1;
            let response = await this.callWithRetries(
                "get",
                appendQueryString(url, {
                    page,
                    limit: Limit.MAX_LIMIT,
                }),
                null,
                config
            );
            const totalPages = response.data?.meta?.pagination?.total_pages;
            if (totalPages) {
                let result: PaginatedData<T> = response.data;
                while (page < totalPages) {
                    const remainingLimit =
                        (limit || 0) - page * Limit.MAX_LIMIT;
                    page++;
                    response = await this.callWithRetries(
                        "get",
                        appendQueryString(url, {
                            page: page,
                            limit:
                                limit === Limit.ALL
                                    ? Limit.MAX_LIMIT
                                    : remainingLimit,
                        }),
                        null,
                        config
                    );
                    result.data?.concat(response.data.data);
                    result.meta = response.data.meta;
                }
                response.data = result;
            } else if (Array.isArray(response.data)) {
                let result: T[] = response.data;
                while (true) {
                    const remainingLimit =
                        (limit || 0) - page * Limit.MAX_LIMIT;
                    page++;
                    response = await this.callWithRetries(
                        "get",
                        appendQueryString(url, {
                            page: page,
                            limit:
                                limit === Limit.ALL
                                    ? Limit.MAX_LIMIT
                                    : remainingLimit,
                        }),
                        null,
                        config
                    );
                    if (response.data?.length) {
                        result.concat(response.data);
                    } else {
                        break;
                    }
                }
                response.data = result;
            }

            return Promise.resolve(response) as R;
        } else {
            limit = limit || this.config.defaultLimit;
            return await this.callWithRetries(
                "get",
                appendQueryString(url, {
                    page,
                    limit,
                }),
                null,
                config
            );
        }
    }

    async post<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D> | CacheRequestConfig<D>
    ): Promise<R> {
        config = this.setupCacheInvalidationConfig(url, config);
        return await this.callWithRetries("post", url, data, config);
    }

    async put<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D> | CacheRequestConfig<D>
    ): Promise<R> {
        config = this.setupCacheInvalidationConfig(url, config);
        return await this.callWithRetries("put", url, data, config);
    }

    async delete<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        config?: AxiosRequestConfig<D> | CacheRequestConfig<D>
    ): Promise<R> {
        config = this.setupCacheInvalidationConfig(url, config);
        return await this.callWithRetries("delete", url, null, config);
    }

    async getResources<T>(
        resourceUrl: string,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.get(resourceUrl, page, limit);
        return response.data;
    }

    private async callWithRetries<T = any, R = AxiosResponse<T>, D = any>(
        method: string,
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D> | CacheRequestConfig<D>
    ): Promise<R> {
        let retries = 0;
        while (true) {
            try {
                switch (method) {
                    case "get":
                        return await this.axiosInstance.get(url, config);
                    case "post":
                        return await this.axiosInstance.post(url, data, config);
                    case "put":
                        return await this.axiosInstance.put(url, data, config);
                    case "delete":
                        return await this.axiosInstance.delete(url, config);
                }
                throw new Error(
                    `Failed to call BigCommerce API ${url}. Unsupported http method ${method}`
                );
            } catch (error: any) {
                if (
                    !this.config.failOn404 &&
                    (method === "get" || method === "delete") &&
                    error.response?.status === 404
                ) {
                    // return null if response code is 404 for get and delete
                    const response = error.response;
                    response.data = null;
                    return Promise.resolve(response as R);
                } else if (
                    retries < (this.config.maxRetries || 0) &&
                    ((this.config.retryOnReadTimeout &&
                        method === "get" &&
                        error.code === "ECONNABORTED") || // read timeout
                        error.response.status === 429 || // rate limit
                        error.response.status >= 500) // BigCommerce API down
                ) {
                    // retry if the error is recoverable
                    let retryDelay: number =
                        retries * (this.config.retryDelay || 0);
                    if (error.response.status === 429) {
                        retryDelay = parseInt(
                            error.response.headers[
                                "X-Rate-Limit-Time-Reset-Ms"
                            ] || retryDelay,
                            10
                        );
                    }

                    retries++;
                    console.error(
                        `Failed to call ${url}, retrying for ${retries} time`,
                        error
                    );
                    await new Promise((resolve) =>
                        setTimeout(resolve, retryDelay)
                    );
                    continue;
                } else {
                    // throw the unrecoverable error
                    const request: ClientRequest = error.request;
                    const response: AxiosResponse = error.response;

                    if (request && response) {
                        throw new Error(
                            `Failed to call BigCommerce API ${
                                request.protocol
                            }://${request.host}${
                                request.path
                            }. Response Status: ${
                                response.status
                            }, Response: ${JSON.stringify(
                                response.data,
                                null,
                                0
                            )}.`,
                            { cause: error }
                        );
                    }

                    if (request) {
                        if (error.code === "ECONNABORTED") {
                            throw new Error(
                                `Failed to call BigCommerce API ${request.protocol}://${request.host}${request.path}. Timeout after ${this.config.timeout} ms.`,
                                { cause: error }
                            );
                        }

                        throw new Error(
                            `Failed to call BigCommerce API ${request.protocol}://${request.host}${request.path}.`,
                            { cause: error }
                        );
                    }

                    throw new Error(`Failed to call BigCommerce API.`, {
                        cause: error,
                    });
                }
            }
        }
    }

    private setupCacheTtlConfig(
        config?: AxiosRequestConfig | CacheRequestConfig
    ): CacheRequestConfig | undefined {
        if (!this.config.cache?.enable) {
            return config;
        }

        return Object.assign(
            {
                cache: {
                    ttl: this.config.cache.ttl,
                },
            },
            config as CacheRequestConfig
        );
    }

    private setupCacheInvalidationConfig(
        url: string = "",
        config?: AxiosRequestConfig | CacheRequestConfig
    ): CacheRequestConfig | undefined {
        if (!this.config.cache?.enable) {
            return config;
        }

        const region = getCacheRegion(url);

        // remove the entire region of cached data
        return Object.assign(
            {
                cache: {
                    update: { [`${region}:*`]: "delete" },
                },
            },
            config as CacheRequestConfig
        );
    }
}
