"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheRegion = exports.toQueryString = exports.appendQueryString = void 0;
function appendQueryString(url, params) {
    if (!params) {
        return url;
    }
    return `${url}${url.indexOf("?") > -1 ? "&" : "?"}${toQueryString(params)}`;
}
exports.appendQueryString = appendQueryString;
function toQueryString(params) {
    if (!params) {
        return "";
    }
    let queryParams = [];
    for (const [key, value] of Object.entries(params)) {
        if (value !== null && typeof value !== "undefined") {
            let normalizedValue = value;
            if (Array.isArray(value)) {
                normalizedValue = value.join(",");
            }
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(normalizedValue)}`);
        }
    }
    return queryParams.join("&");
}
exports.toQueryString = toQueryString;
function getCacheRegion(url = "") {
    url && (url = url.replace(/^https?:\/\//, ""));
    const urlParts = url.split("/");
    let modelName = urlParts[3];
    if (modelName === "catalog") {
        let subModelName = urlParts[4];
        switch (subModelName) {
            case "tree":
                subModelName = "categories";
                break;
            case "variants":
                subModelName = "products";
                break;
        }
        modelName = `${modelName}/${subModelName}`;
    }
    return `${urlParts[1]}_${urlParts[3]}`; // ${storeHash}_${modelName}
}
exports.getCacheRegion = getCacheRegion;
