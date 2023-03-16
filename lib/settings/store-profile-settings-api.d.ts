import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StoreProfile } from "../model/generated/settings.v3";
export declare class StoreProfileSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStoreProfileSettings<T extends StoreProfile>(channelId?: number): Promise<Data<T>>;
    updateStoreProfileSettings<T extends StoreProfile>(storeProfileSettings: T, channelId?: number): Promise<Data<T>>;
}
