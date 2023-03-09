"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildRegionAwareMemoryStorage = void 0;
const axios_cache_interceptor_1 = require("axios-cache-interceptor");
function buildRegionAwareMemoryStorage(cloneData = false) {
    const storage = (0, axios_cache_interceptor_1.buildStorage)({
        set: (key, value) => {
            storage.data[key] = value;
        },
        remove: (key) => {
            if (key === "*") {
                storage.data = Object.create(null);
            }
            // remove the entire region of cached data
            let region = `${key.split("|")[0]}|`;
            for (const k of Object.keys(storage.data)) {
                if (k.startsWith(region)) {
                    delete storage.data[k];
                }
            }
        },
        find: (key) => {
            const value = storage.data[key];
            if (cloneData && value !== undefined) {
                if (typeof structuredClone === "function") {
                    return structuredClone(value);
                }
                return JSON.parse(JSON.stringify(value));
            }
            return value;
        },
    });
    storage.data = Object.create(null);
    return storage;
}
exports.buildRegionAwareMemoryStorage = buildRegionAwareMemoryStorage;
