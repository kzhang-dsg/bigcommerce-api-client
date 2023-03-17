import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontSearchSettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class StorefrontSearchSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontSearchSettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontSearchSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/storefront/search`, params)
        );
        return response.data;
    }

    async updateStorefrontSearchSettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontSearchSettings
    >(storefrontSearchSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/storefront/search`, params),
            storefrontSearchSettings
        );
        return response.data;
    }
}
