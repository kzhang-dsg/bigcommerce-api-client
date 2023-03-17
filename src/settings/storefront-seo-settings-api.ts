import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { SEOSettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class StorefrontSeoSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontSeoSettings<
        Params extends ChannelIdQueryParams,
        T extends SEOSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/storefront/seo`, params)
        );
        return response.data;
    }

    async updateStorefrontSeoSettings<
        Params extends ChannelIdQueryParams,
        T extends SEOSettings
    >(storefrontSeoSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/storefront/seo`, params),
            storefrontSeoSettings
        );
        return response.data;
    }
}
