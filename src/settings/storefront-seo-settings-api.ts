import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { SEOSettings } from "../model/generated/settings.v3";

export class StorefrontSeoSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontSeoSettings<T extends SEOSettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/storefront/seo${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateStorefrontSeoSettings<T extends SEOSettings>(
        storefrontSeoSettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/storefront/seo${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            storefrontSeoSettings
        );
        return response.data;
    }
}
