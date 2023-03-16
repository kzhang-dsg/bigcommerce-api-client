import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontSecuritySettings } from "../model/generated/settings.v3";

export class StorefrontSecuritySettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontSecuritySettings<T extends StorefrontSecuritySettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/storefront/security${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateStorefrontSecuritySettings<
        T extends StorefrontSecuritySettings
    >(storefrontSecuritySettings: T, channelId?: number): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/storefront/security${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            storefrontSecuritySettings
        );
        return response.data;
    }
}
