import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { InventoryNotificationsSettings } from "../model/generated/settings.v3";
export declare class InventoryNotificationSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getInventoryNotificationSettings<T extends InventoryNotificationsSettings>(channelId?: number): Promise<Data<T>>;
    updateInventoryNotificationSettings<T extends InventoryNotificationsSettings>(inventoryNotificationSettings: T, channelId?: number): Promise<Data<T>>;
}
