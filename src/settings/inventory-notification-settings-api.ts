import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { InventoryNotificationsSettings } from "../model/generated/settings.v3";

export class InventoryNotificationSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getInventoryNotificationSettings<
        T extends InventoryNotificationsSettings
    >(channelId?: number): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/inventory/notifications${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateInventoryNotificationSettings<
        T extends InventoryNotificationsSettings
    >(inventoryNotificationSettings: T, channelId?: number): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/inventory/notifications${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            inventoryNotificationSettings
        );
        return response.data;
    }
}
