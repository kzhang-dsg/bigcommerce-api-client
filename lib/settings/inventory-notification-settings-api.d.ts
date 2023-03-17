import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { InventoryNotificationsSettings } from "../model/generated/settings.v3";
export declare class InventoryNotificationSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getInventoryNotificationSettings<Params extends ChannelIdQueryParams, T extends InventoryNotificationsSettings>(params?: Params): Promise<Data<T>>;
    updateInventoryNotificationSettings<Params extends ChannelIdQueryParams, T extends InventoryNotificationsSettings>(inventoryNotificationSettings: T, params?: Params): Promise<Data<T>>;
}
