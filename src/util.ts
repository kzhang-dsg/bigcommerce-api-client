import { DateFormat } from "./model/common";

export function appendQueryString(
    url: string,
    params?: Object,
    dateFormat: DateFormat = DateFormat.ISO8601
): string {
    if (!params) {
        return url;
    }

    return `${url}${url.indexOf("?") > -1 ? "&" : "?"}${toQueryString(
        params,
        dateFormat
    )}`;
}

export function toQueryString(
    params?: Object,
    dateFormat: DateFormat = DateFormat.ISO8601
): string {
    if (!params) {
        return "";
    }

    let queryParams = [];
    for (const [key, value] of Object.entries(params)) {
        if (value !== null && typeof value !== "undefined") {
            let normalizedValue = value;
            if (Array.isArray(value)) {
                normalizedValue = value.join(",");
            } else if (value instanceof Date) {
                if (dateFormat === DateFormat.ISO8601) {
                    normalizedValue = (value as Date).toISOString();
                } else if (dateFormat === DateFormat.UNIX_TIMESTAMP) {
                    normalizedValue = Math.ceil(
                        (value as Date).getTime() / 1000
                    );
                }
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

export function getCacheRegion(storeHash = "", url = "") {
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
    } else if (
        modelName === "storefront" ||
        modelName === "content" ||
        modelName === "settings" ||
        modelName === "tax" ||
        modelName === "payments" ||
        modelName === "marketing"
    ) {
        let subModelName = urlParts[2];

        if (subModelName) {
            modelName = `${modelName}:${subModelName}`;
        }

        if (
            modelName === "settings" &&
            (subModelName === "store" || subModelName === "storefront")
        ) {
            let subModelName = urlParts[3];
            modelName = `${modelName}:${subModelName}`;
        }
    }

    return `${storeHash}${modelName ? `:${modelName}` : ""}`;
}

const ISO8601_REGEX =
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;
const TIME_ZONE_OFFSET = (new Date().getTimezoneOffset() / 60) * -1;

function isValidDate(date: any) {
    return (
        date != null &&
        Object.prototype.toString.call(date) === "[object Date]" &&
        !isNaN(date)
    );
}

export function parseDate(key: string, value: any) {
    if (typeof value === "string") {
        if (
            key.startsWith("date_") ||
            key.endsWith("_date") ||
            ISO8601_REGEX.test(value)
        ) {
            let potentialDate = new Date(value);
            if (isValidDate(potentialDate)) {
                potentialDate = new Date(
                    potentialDate.getTime() + TIME_ZONE_OFFSET // honor server time zone when converting YYYY-MM-DD time
                );
                return potentialDate;
            }
        }
    }
    return value;
}

export function dateTransformer(data: string) {
    if (!data) {
        return data;
    }

    try {
        return JSON.parse(data, parseDate);
    } catch (err) {
        return data;
    }
}
