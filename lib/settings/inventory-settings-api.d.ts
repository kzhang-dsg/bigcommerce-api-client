import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { InventorySettings } from "../model/generated/settings.v3";
export declare class InventorySettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getInventorySettings<T extends InventorySettings>(channelId?: number): Promise<Data<T>>;
    updateInventorySettings<T extends InventorySettings>(inventorySettings: T, channelId?: number): Promise<Data<T>>;
}
