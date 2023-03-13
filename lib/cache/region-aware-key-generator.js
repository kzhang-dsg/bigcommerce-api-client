"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionAwareKeyGenerator = void 0;
const axios_cache_interceptor_1 = require("axios-cache-interceptor");
const util_1 = require("../util");
/**
 * Make the the key region aware by prefix region to the key
 *
 * @link https://github.com/arthurfiorette/axios-cache-interceptor/blob/main/src/util/key-generator.ts
 */
const SLASHES_REGEX = /^\/|\/$/g;
exports.regionAwareKeyGenerator = (0, axios_cache_interceptor_1.buildKeyGenerator)(({ baseURL = "", url = "", method = "get", params, data }) => {
    baseURL && (baseURL = baseURL.replace(SLASHES_REGEX, ""));
    url && (url = url.replace(SLASHES_REGEX, ""));
    const region = (0, util_1.getCacheRegion)(url);
    // prefix the region to every cache key, so the keys in the same region can be invalidated together
    return `${region}:${baseURL}${baseURL && url ? "/" : ""}${url}${JSON.stringify(params)}`;
});
