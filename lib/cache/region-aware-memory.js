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
            else if (key.endsWith(":*")) {
                // remove the entire region of cached data
                let regionPrefix = key.slice(0, -1); // remove the last character '*'
                for (const k of Object.keys(storage.data)) {
                    if (k.startsWith(regionPrefix)) {
                        delete storage.data[k];
                    }
                }
            }
            else {
                delete storage.data[key];
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
