import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StoreProfile } from "../model/generated/settings.v3";
export declare class StoreProfileSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStoreProfileSettings<Params extends ChannelIdQueryParams, T extends StoreProfile>(params?: Params): Promise<Data<T>>;
    updateStoreProfileSettings<Params extends ChannelIdQueryParams, T extends StoreProfile>(storeProfileSettings: T, params?: Params): Promise<Data<T>>;
}
