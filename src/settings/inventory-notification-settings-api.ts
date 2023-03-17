import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { InventoryNotificationsSettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class InventoryNotificationSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getInventoryNotificationSettings<
        Params extends ChannelIdQueryParams,
        T extends InventoryNotificationsSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/inventory/notifications`, params)
        );
        return response.data;
    }

    async updateInventoryNotificationSettings<
        Params extends ChannelIdQueryParams,
        T extends InventoryNotificationsSettings
    >(inventoryNotificationSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/inventory/notifications`, params),
            inventoryNotificationSettings
        );
        return response.data;
    }
}
