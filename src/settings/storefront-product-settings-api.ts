import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontProductSettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class StorefrontProductSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontProductSettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontProductSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/storefront/product`, params)
        );
        return response.data;
    }

    async updateStorefrontProductSettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontProductSettings
    >(storefrontProductSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/storefront/product`, params),
            storefrontProductSettings
        );
        return response.data;
    }
}
