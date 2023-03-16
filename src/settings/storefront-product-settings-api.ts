import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontProductSettings } from "../model/generated/settings.v3";

export class StorefrontProductSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontProductSettings<T extends StorefrontProductSettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/storefront/product${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateStorefrontProductSettings<T extends StorefrontProductSettings>(
        storefrontProductSettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/storefront/product${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            storefrontProductSettings
        );
        return response.data;
    }
}
