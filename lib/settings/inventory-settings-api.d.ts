import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { InventorySettings } from "../model/generated/settings.v3";
export declare class InventorySettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getInventorySettings<Params extends ChannelIdQueryParams, T extends InventorySettings>(params?: Params): Promise<Data<T>>;
    updateInventorySettings<Params extends ChannelIdQueryParams, T extends InventorySettings>(inventorySettings: T, params?: Params): Promise<Data<T>>;
}
