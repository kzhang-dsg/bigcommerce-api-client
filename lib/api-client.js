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
const crypto_1 = require("crypto");
const region_aware_key_generator_1 = require("./cache/region-aware-key-generator");
const region_aware_memory_1 = require("./cache/region-aware-memory");
const region_aware_redis_1 = require("./cache/region-aware-redis");
const common_1 = require("./model/common");
const util_1 = require("./util");
class ApiClient {
    constructor(config) {
        var _a, _b, _c, _d;
        this.config = config;
        const axiosInstance = axios_1.default.create({
            baseURL: `https://api.bigcommerce.com/stores/${this.config.storeHash}`,
            timeout: this.config.timeout,
            headers: {
                "X-Auth-Token": config.accessToken,
                "Content-Type": "application/json",
                Accept: `application/json`,
            },
        });
        axiosInstance.defaults.transformResponse = [util_1.dateTransformer];
        let storage;
        if (((_a = this.config.cache) === null || _a === void 0 ? void 0 : _a.type) === common_1.CacheType.REDIS) {
            storage = (0, region_aware_redis_1.buildRegionAwareRedisStorage)(((_b = this.config.cache) === null || _b === void 0 ? void 0 : _b.cacheKeyPrefix) || "axios", (_c = this.config.cache) === null || _c === void 0 ? void 0 : _c.redisClientOptions, this.config.timeout);
        }
        else {
            storage = (0, region_aware_memory_1.buildRegionAwareMemoryStorage)(((_d = this.config.cache) === null || _d === void 0 ? void 0 : _d.cacheKeyPrefix) || "axios");
        }
        this.axiosInstance = (0, axios_cache_interceptor_1.setupCache)(axiosInstance, {
            generateKey: region_aware_key_generator_1.regionAwareKeyGenerator,
            storage,
        });
    }
    enableCache(enable, ttl) {
        const newConfig = {
            enable,
        };
        if (ttl) {
            newConfig.ttl = ttl;
        }
        this.config.cache = Object.assign({}, this.config.cache, newConfig);
    }
    get(url, page, limit, config) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheTtlConfig(config);
            let maxLimit = common_1.Limit.MAX_LIMIT;
            if (url.startsWith("/v3/catalog/products?") &&
                url.indexOf("include=") > -1) {
                let params = new URLSearchParams(url);
                const includeParam = (_a = params
                    .get("include")) === null || _a === void 0 ? void 0 : _a.split(",").map((param) => param.trim());
                if ((includeParam === null || includeParam === void 0 ? void 0 : includeParam.includes("options")) ||
                    (includeParam === null || includeParam === void 0 ? void 0 : includeParam.includes("modifiers"))) {
                    maxLimit = common_1.Limit.BATCH_MAX_LIMIT;
                }
            }
            if (limit === common_1.Limit.ALL || (limit || 0) > maxLimit) {
                // fetch data by iterating thru the pagination
                page = page || 1;
                let response = yield this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                    page,
                    limit: maxLimit,
                }), undefined, config);
                const totalPages = (_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total_pages;
                if (totalPages) {
                    let result = response.data;
                    while (page < totalPages) {
                        const perPage = ((_g = (_f = (_e = response.data) === null || _e === void 0 ? void 0 : _e.meta) === null || _f === void 0 ? void 0 : _f.pagination) === null || _g === void 0 ? void 0 : _g.per_page) || maxLimit;
                        const remainingLimit = Math.min((limit || 0) - page * perPage, maxLimit);
                        if (remainingLimit <= 0) {
                            break;
                        }
                        page++;
                        response = yield this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                            page: page,
                            limit: limit === common_1.Limit.ALL ? perPage : remainingLimit,
                        }), undefined, config);
                        if (result.data && ((_h = response.data) === null || _h === void 0 ? void 0 : _h.data)) {
                            result.data = result.data.concat(response.data.data);
                            result.meta = response.data.meta;
                        }
                    }
                    response.data = result;
                }
                else if (Array.isArray(response.data)) {
                    let result = response.data;
                    while (true) {
                        const remainingLimit = Math.min((limit || 0) - page * maxLimit, maxLimit);
                        if (remainingLimit <= 0) {
                            break;
                        }
                        page++;
                        response = yield this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                            page: page,
                            limit: limit === common_1.Limit.ALL ? maxLimit : remainingLimit,
                        }), undefined, config);
                        if ((_j = response.data) === null || _j === void 0 ? void 0 : _j.length) {
                            result = result.concat(response.data);
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
                return yield this.callWithRetries("get", (0, util_1.appendQueryString)(url, {
                    page,
                    limit,
                }), undefined, config);
            }
        });
    }
    post(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheInvalidationConfig(url, config);
            return yield this.callWithRetries("post", url, data, config);
        });
    }
    put(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheInvalidationConfig(url, config);
            return yield this.callWithRetries("put", url, data, config);
        });
    }
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            config = this.setupCacheInvalidationConfig(url, config);
            return yield this.callWithRetries("delete", url, undefined, config);
        });
    }
    getResources(resourceUrl, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.get(resourceUrl, page, limit);
            return response.data;
        });
    }
    callWithRetries(method, url, data, config) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            let retries = 0;
            while (true) {
                try {
                    switch (method) {
                        case "get":
                            return yield this.axiosInstance.get(url, config);
                        case "post":
                            return yield this.axiosInstance.post(url, data, config);
                        case "put":
                            return yield this.axiosInstance.put(url, data, config);
                        case "delete":
                            return yield this.axiosInstance.delete(url, config);
                    }
                    throw new Error(`Failed to call BigCommerce API ${url}. Unsupported http method ${method}`);
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
                            ((_b = error.response) === null || _b === void 0 ? void 0 : _b.status) === 429 || // rate limit
                            (((_c = error.response) === null || _c === void 0 ? void 0 : _c.status) >= 500 && // BigCommerce API down
                                !(((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) === 503 &&
                                    ((_g = (_f = (_e = error.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.title) === null || _g === void 0 ? void 0 : _g.startsWith("The store is suspended")))))) {
                        // retry if the error is recoverable
                        let retryDelay = retries * (this.config.retryDelay || 0);
                        retryDelay += (0, crypto_1.randomInt)(0, this.config.retryDelay || 0);
                        if (((_h = error.response) === null || _h === void 0 ? void 0 : _h.status) === 429) {
                            retryDelay = parseInt(((_j = error.response) === null || _j === void 0 ? void 0 : _j.headers["X-Rate-Limit-Time-Reset-Ms"]) || retryDelay, 10);
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
                            throw new Error(`Failed to call BigCommerce API ${request.protocol}://${request.host}${request.path}. Response Status: ${response.status}, Response: ${JSON.stringify(response.data, null, 0)}. Retries: ${retries}. Error: ${error.message}.`, { cause: error });
                        }
                        if (request) {
                            if (error.code === "ECONNABORTED") {
                                throw new Error(`Failed to call BigCommerce API ${request.protocol}://${request.host}${request.path}. Timeout after ${this.config.timeout} ms. Retries: ${retries}. Error: ${error.message}.`, { cause: error });
                            }
                            throw new Error(`Failed to call BigCommerce API ${request.protocol}://${request.host}${request.path}. Retries: ${retries}. Error: ${error.message}.`, { cause: error });
                        }
                        throw new Error(`Failed to call BigCommerce API. Retries: ${retries}. Error: ${error.message}.`, {
                            cause: error,
                        });
                    }
                }
            }
        });
    }
    setupCacheTtlConfig(config) {
        var _a;
        return Object.assign({
            cache: ((_a = this.config.cache) === null || _a === void 0 ? void 0 : _a.enable)
                ? {
                    ttl: this.config.cache.ttl,
                }
                : false,
        }, config);
    }
    setupCacheInvalidationConfig(url = "", config) {
        var _a;
        const region = (0, util_1.getCacheRegion)(this.config.storeHash, url);
        // remove the entire region of cached data
        return Object.assign({
            cache: ((_a = this.config.cache) === null || _a === void 0 ? void 0 : _a.enable)
                ? {
                    update: { [`${region}:*`]: "delete" },
                }
                : false,
        }, config);
    }
}
exports.ApiClient = ApiClient;
