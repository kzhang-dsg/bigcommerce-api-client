"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_cache_interceptor_1 = require("axios-cache-interceptor");
const region_aware_key_generator_1 = require("./cache/region-aware-key-generator");
const region_aware_memory_1 = require("./cache/region-aware-memory");
const common_1 = require("./model/common");
const util_1 = require("./util");
class ApiClient {
    constructor(config) {
        var _a;
        this.config = config;
        this.axiosInstance = axios_1.default.create({
            baseURL: `https://api.bigcommerce.com/stores/${this.config.storeHash}`,
            timeout: this.config.timeout,
            headers: {
                "X-Auth-Token": config.accessToken,
                "Content-Type": "application/json",
                Accept: `application/json`,
            },
        });
        if ((_a = this.config.cache) === null || _a === void 0 ? void 0 : _a.enable) {
            this.axiosInstance = (0, axios_cache_interceptor_1.setupCache)(this.axiosInstance, {
                generateKey: region_aware_key_generator_1.regionAwareKeyGenerator,
                storage: (0, region_aware_memory_1.buildRegionAwareMemoryStorage)(),
            });
        }
    }
    get(url, page, limit, config) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheTtlConfig(config);
            if (limit === common_1.Limit.ALL) {
                // fetch all data by iterating thru the pagination
                let response = yield this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                    page,
                    limit: common_1.Limit.MAX_LIMIT,
                }), null, config);
                const totalPages = (_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.pagination) === null || _c === void 0 ? void 0 : _c.total_pages;
                if (totalPages) {
                    let result = response.data;
                    page = page || 1;
                    while (page < totalPages) {
                        response = yield this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                            page: ++page,
                            limit: common_1.Limit.MAX_LIMIT,
                        }), null, config);
                        (_d = result.data) === null || _d === void 0 ? void 0 : _d.concat(response.data.data);
                        result.meta = response.data.meta;
                    }
                    response.data = result;
                }
                else if (Array.isArray(response.data)) {
                    let result = response.data;
                    page = page || 1;
                    while (true) {
                        response = yield this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                            page: ++page,
                            limit: common_1.Limit.MAX_LIMIT,
                        }), null, config);
                        if ((_e = response.data) === null || _e === void 0 ? void 0 : _e.length) {
                            result.concat(response.data);
                        }
                        else {
                            break;
                        }
                    }
                    response.data = result;
                }
                return Promise.resolve(response);
            }
            else {
                limit = limit || this.config.defaultLimit;
                return this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                    page,
                    limit,
                }), null, config);
            }
        });
    }
    post(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheInvalidationConfig(url, config);
            return this.callWithRetries("post", url, data, config);
        });
    }
    put(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheInvalidationConfig(url, config);
            return this.callWithRetries("put", url, data, config);
        });
    }
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheInvalidationConfig(url, config);
            return this.callWithRetries("delete", url, null, config);
        });
    }
    getResources(resourceUrl, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get(resourceUrl, page, limit);
            return response.data;
        });
    }
    callWithRetries(method, url, data, config) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
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
                    throw new Error(`Failed to call API ${url}. Unsupported http method ${method}`);
                }
                catch (error) {
                    if (!this.config.failOn404 &&
                        (method === "get" || method === "delete") &&
                        ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                        // return null if response code is 404 for get and delete
                        const response = error.response;
                        response.data = null;
                        return Promise.resolve(response);
                    }
                    else if (retries < (this.config.maxRetries || 0) &&
                        ((this.config.retryOnReadTimeout &&
                            method === "get" &&
                            error.code === "ECONNABORTED") || // read timeout
                            error.response.status === 429 || // rate limit
                            error.response.status >= 500) // BigCommerce API down
                    ) {
                        // retry if the error is recoverable
                        let retryDelay = retries * (this.config.retryDelay || 0);
                        if (error.response.status === 429) {
                            retryDelay = parseInt(error.response.headers["X-Rate-Limit-Time-Reset-Ms"] || retryDelay, 10);
                        }
                        retries++;
                        console.error(`Failed to call ${url}, retrying for ${retries} time`, error);
                        yield new Promise((resolve) => setTimeout(resolve, retryDelay));
                        continue;
                    }
                    else {
                        // throw the unrecoverable error
                        const request = error.request;
                        const response = error.response;
                        if (request && response) {
                            throw new Error(`Failed to call API ${request.protocol}://${request.host}${request.path}. Response Status: ${response.status}, Response: ${JSON.stringify(response.data, null, 0)}.`, { cause: error });
                        }
                        if (request && error.code === "ECONNABORTED") {
                            throw new Error(`Failed to call API ${request.protocol}://${request.host}${request.path}. Timeout after ${this.config.timeout} ms.`, { cause: error });
                        }
                        throw error;
                    }
                }
            }
        });
    }
    setupCacheTtlConfig(config) {
        var _a;
        if (!((_a = this.config.cache) === null || _a === void 0 ? void 0 : _a.enable)) {
            return config;
        }
        return Object.assign({
            cache: {
                ttl: this.config.cache.ttl,
            },
        }, config);
    }
    setupCacheInvalidationConfig(url = "", config) {
        var _a;
        if (!((_a = this.config.cache) === null || _a === void 0 ? void 0 : _a.enable)) {
            return config;
        }
        const region = (0, util_1.getCacheRegion)(url);
        // remove the entire region of cached data
        return Object.assign({
            cache: {
                update: { [`${region}:*`]: "delete" },
            },
        }, config);
    }
}
exports.ApiClient = ApiClient;
