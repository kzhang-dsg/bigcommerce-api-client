import { StorageValue, AxiosStorage } from "axios-cache-interceptor";
export declare function buildRegionAwareMemoryStorage(cacheKeyPrefix: string, cloneData?: boolean): MemoryStorage;
export type MemoryStorage = AxiosStorage & {
    data: Record<string, StorageValue>;
};
