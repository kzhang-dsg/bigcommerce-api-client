import {
    StorageValue,
    AxiosStorage,
    buildStorage,
} from "axios-cache-interceptor";

/**
 * Make the the memory cache region aware (when invalidate)
 *
 * @link https://github.com/arthurfiorette/axios-cache-interceptor/blob/main/src/storage/memory.ts
 */
declare const structuredClone: (<T>(value: T) => T) | undefined;

export function buildRegionAwareMemoryStorage(cloneData = false) {
    const storage = buildStorage({
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

                return JSON.parse(JSON.stringify(value)) as StorageValue;
            }

            return value;
        },
    }) as MemoryStorage;

    storage.data = Object.create(null) as Record<string, StorageValue>;

    return storage;
}

export type MemoryStorage = AxiosStorage & {
    data: Record<string, StorageValue>;
};
