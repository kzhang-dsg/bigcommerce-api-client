import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { InventorySettings } from "../model/generated/settings.v3";

export class InventorySettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getInventorySettings<T extends InventorySettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/inventory${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateInventorySettings<T extends InventorySettings>(
        inventorySettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/inventory${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            inventorySettings
        );
        return response.data;
    }
}
