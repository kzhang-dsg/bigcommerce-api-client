"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryString = exports.appendQueryString = void 0;
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
            queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
    }
    return queryParams.join("&");
}
exports.toQueryString = toQueryString;
//# sourceMappingURL=util.js.map