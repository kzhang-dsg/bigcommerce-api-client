import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ClientRequest } from "http";
import { Config, Limit, PaginatedData } from "./model/common";
import { appendQueryString } from "./util";

export class ApiClient {
    readonly axiosInstance: AxiosInstance;
    constructor(private readonly config: Config) {
        this.axiosInstance = axios.create({
            baseURL: `https://api.bigcommerce.com/stores/${config.storeHash}`,
            timeout: config.timeout,
            headers: {
                "X-Auth-Token": config.accessToken,
                "Content-Type": "application/json",
                Accept: `application/json`,
            },
        });
    }

    async get<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        page?: number,
        limit?: number,
        config?: AxiosRequestConfig<D>
    ): Promise<R> {
        if (limit === Limit.ALL) {
            // fetch all data by iterating thru the pagination
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
                page = page || 1;
                while (page < totalPages) {
                    response = await this.callWithRetries(
                        "get",
                        appendQueryString(url, {
                            page: ++page,
                            limit: Limit.MAX_LIMIT,
                        }),
                        null,
                        config
                    );
                    result.data.concat(response.data.data);
                    result.meta = response.data.meta;
                }
                response.data = result;
            } else if (Array.isArray(response.data)) {
                let result: T[] = response.data;
                page = page || 1;
                while (true) {
                    response = await this.callWithRetries(
                        "get",
                        appendQueryString(url, {
                            page: ++page,
                            limit: Limit.MAX_LIMIT,
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
            return this.callWithRetries(
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
        config?: AxiosRequestConfig<D>
    ): Promise<R> {
        return this.callWithRetries("post", url, data, config);
    }

    async put<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>
    ): Promise<R> {
        return this.callWithRetries("put", url, data, config);
    }

    async delete<T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        config?: AxiosRequestConfig<D>
    ): Promise<R> {
        return this.callWithRetries("delete", url, null, config);
    }

    private async callWithRetries<T = any, R = AxiosResponse<T>, D = any>(
        method: string,
        url: string,
        data?: D,
        config?: AxiosRequestConfig<D>
    ): Promise<R> {
        let retries = 0;
        while (true) {
            try {
                switch (method) {
                    case "get":
                        return this.axiosInstance.get(url, config);
                    case "post":
                        return this.axiosInstance.post(url, data, config);
                    case "put":
                        return this.axiosInstance.put(url, data, config);
                    case "delete":
                        return this.axiosInstance.delete(url, config);
                }
                throw new Error(
                    `Failed to call API ${url}. Unsupported http method ${method}`
                );
            } catch (error: any) {
                if (
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
                            `Failed to call API ${request.protocol}://${
                                request.host
                            }${request.path}. Response Status: ${
                                response.status
                            }, Response: ${JSON.stringify(
                                response.data,
                                null,
                                0
                            )}.`,
                            { cause: error }
                        );
                    }

                    if (request && error.code === "ECONNABORTED") {
                        throw new Error(
                            `Failed to call API ${request.protocol}://${request.host}${request.path}. Timeout after ${this.config.timeout} ms.`,
                            { cause: error }
                        );
                    }

                    throw error;
                }
            }
        }
    }
}
