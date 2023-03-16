import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontSearchSettings } from "../model/generated/settings.v3";

export class StorefrontSearchSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontSearchSettings<T extends StorefrontSearchSettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/storefront/search${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateStorefrontSearchSettings<T extends StorefrontSearchSettings>(
        storefrontSearchSettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/storefront/search${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            storefrontSearchSettings
        );
        return response.data;
    }
}
