import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { RobotsTxtSettings } from "../model/generated/settings.v3";

export class StorefrontRobotsTxtSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontRobotsTxtSettings<T extends RobotsTxtSettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/storefront/robotstxt${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateStorefrontRobotsTxtSettings<T extends RobotsTxtSettings>(
        storefrontRobotsTxtSettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/storefront/robotstxt${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            storefrontRobotsTxtSettings
        );
        return response.data;
    }
}
