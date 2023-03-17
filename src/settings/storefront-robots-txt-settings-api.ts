import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { RobotsTxtSettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class StorefrontRobotsTxtSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontRobotsTxtSettings<
        Params extends ChannelIdQueryParams,
        T extends RobotsTxtSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/storefront/robotstxt`, params)
        );
        return response.data;
    }

    async updateStorefrontRobotsTxtSettings<
        Params extends ChannelIdQueryParams,
        T extends RobotsTxtSettings
    >(storefrontRobotsTxtSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/storefront/robotstxt`, params),
            storefrontRobotsTxtSettings
        );
        return response.data;
    }
}
