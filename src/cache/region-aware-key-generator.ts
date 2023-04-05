import { buildKeyGenerator } from "axios-cache-interceptor";
import { getCacheRegion } from "../util";

/**
 * Make the the key region aware by prefix region to the key
 *
 * @link https://github.com/arthurfiorette/axios-cache-interceptor/blob/main/src/util/key-generator.ts
 */

const SLASHES_REGEX = /^\/|\/$/g;

export const regionAwareKeyGenerator = buildKeyGenerator(
    ({ baseURL = "", url = "", method = "get", params, data }) => {
        baseURL && (baseURL = baseURL.replace(SLASHES_REGEX, ""));
        url && (url = url.replace(SLASHES_REGEX, ""));
        const region = getCacheRegion(url);

        // prefix the region to every cache key, so the keys in the same region can be invalidated together
        return `${region}:${baseURL}${baseURL && url ? "/" : ""}${url}${
            params ? JSON.stringify(params) : ""
        }`;
    }
);
