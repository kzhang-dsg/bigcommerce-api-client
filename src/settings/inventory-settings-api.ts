import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { InventorySettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class InventorySettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getInventorySettings<
        Params extends ChannelIdQueryParams,
        T extends InventorySettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/inventory`, params)
        );
        return response.data;
    }

    async updateInventorySettings<
        Params extends ChannelIdQueryParams,
        T extends InventorySettings
    >(inventorySettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/inventory`, params),
            inventorySettings
        );
        return response.data;
    }
}
