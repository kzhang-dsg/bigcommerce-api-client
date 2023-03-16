import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontStatus } from "../model/generated/settings.v3";

export class StorefrontStatusSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontStatusSettings<T extends StorefrontStatus>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/storefront/status${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateStorefrontStatusSettings<T extends StorefrontStatus>(
        storefrontStatusSettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/storefront/status${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            storefrontStatusSettings
        );
        return response.data;
    }
}
