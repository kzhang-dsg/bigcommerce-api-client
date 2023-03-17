import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontSecuritySettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class StorefrontSecuritySettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStorefrontSecuritySettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontSecuritySettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/storefront/security`, params)
        );
        return response.data;
    }

    async updateStorefrontSecuritySettings<
        Params extends ChannelIdQueryParams,
        T extends StorefrontSecuritySettings
    >(storefrontSecuritySettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/storefront/security`, params),
            storefrontSecuritySettings
        );
        return response.data;
    }
}
