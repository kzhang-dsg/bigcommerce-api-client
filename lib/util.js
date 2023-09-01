"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateTransformer = exports.parseDate = exports.getCacheRegion = exports.toQueryString = exports.appendQueryString = void 0;
const common_1 = require("./model/common");
function appendQueryString(url, params, dateFormat = common_1.DateFormat.ISO8601) {
    if (!params) {
        return url;
    }
    return `${url}${url.indexOf("?") > -1 ? "&" : "?"}${toQueryString(params, dateFormat)}`;
}
exports.appendQueryString = appendQueryString;
function toQueryString(params, dateFormat = common_1.DateFormat.ISO8601) {
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
            else if (value instanceof Date) {
                if (dateFormat === common_1.DateFormat.ISO8601) {
                    normalizedValue = value.toISOString();
                }
                else if (dateFormat === common_1.DateFormat.UNIX_TIMESTAMP) {
                    normalizedValue = Math.ceil(value.getTime() / 1000);
                }
            }
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(normalizedValue)}`);
        }
    }
    return queryParams.join("&");
}
exports.toQueryString = toQueryString;
function getCacheRegion(storeHash = "", url = "") {
    url && (url = url.replace(/^https?:\/\/|^\//, "").replace(/\?.*/, ""));
    const urlParts = url.split("/");
    let modelName = urlParts[1];
    if (modelName === "catalog") {
        let subModelName = urlParts[2];
        switch (subModelName) {
            case "tree":
                subModelName = "categories";
                break;
            case "variants":
                subModelName = "products";
                break;
        }
        modelName = `${modelName}:${subModelName}`;
    }
    else if (modelName === "storefront" ||
        modelName === "content" ||
        modelName === "settings" ||
        modelName === "tax" ||
        modelName === "payments" ||
        modelName === "marketing") {
        let subModelName = urlParts[2];
        if (subModelName) {
            modelName = `${modelName}:${subModelName}`;
        }
        if (modelName === "settings" &&
            (subModelName === "store" || subModelName === "storefront")) {
            let subModelName = urlParts[3];
            modelName = `${modelName}:${subModelName}`;
        }
    }
    return `${storeHash}${modelName ? `:${modelName}` : ""}`;
}
exports.getCacheRegion = getCacheRegion;
const ISO8601_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;
const TIME_ZONE_OFFSET = (new Date().getTimezoneOffset() / 60) * -1;
function isValidDate(date) {
    return (date != null &&
        Object.prototype.toString.call(date) === "[object Date]" &&
        !isNaN(date));
}
function parseDate(key, value) {
    if (typeof value === "string") {
        if (key.startsWith("date_") ||
            key.endsWith("_date") ||
            ISO8601_REGEX.test(value)) {
            let potentialDate = new Date(value);
            if (isValidDate(potentialDate)) {
                potentialDate = new Date(potentialDate.getTime() + TIME_ZONE_OFFSET // honor server time zone when converting YYYY-MM-DD time
                );
                return potentialDate;
            }
        }
    }
    return value;
}
exports.parseDate = parseDate;
function dateTransformer(data) {
    if (!data) {
        return data;
    }
    try {
        return JSON.parse(data, parseDate);
    }
    catch (err) {
        return data;
    }
}
exports.dateTransformer = dateTransformer;
