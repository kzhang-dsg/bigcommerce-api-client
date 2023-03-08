export function appendQueryString(url: string, params?: Object): string {
    if (!params) {
        return url;
    }

    return `${url}${url.indexOf("?") > -1 ? "&" : "?"}${toQueryString(params)}`;
}

export function toQueryString(params?: Object): string {
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
            queryParams.push(
                `${encodeURIComponent(key)}=${encodeURIComponent(
                    normalizedValue
                )}`
            );
        }
    }

    return queryParams.join("&");
}
