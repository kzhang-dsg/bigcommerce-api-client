import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontStatus } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class StorefrontStatusSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontStatusSettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontStatus
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/storefront/status`, params)
        );
        return response.data;
    }

    async updateStorefrontStatusSettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontStatus
    >(storefrontStatusSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/storefront/status`, params),
            storefrontStatusSettings
        );
        return response.data;
    }
}
