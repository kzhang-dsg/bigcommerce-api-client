import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { AbandonedCartSettings } from "../model/generated/abandoned_cart_emails.v3";
import { appendQueryString } from "../util";

export class EmailTemplateSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getTemplateSettings<
        Params extends ChannelIdQueryParams,
        T extends AbandonedCartSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/storefront/product`, params)
        );
        return response.data;
    }

    async updateTemplateSettings<
        Params extends ChannelIdQueryParams,
        T extends AbandonedCartSettings
    >(storefrontProductSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/storefront/product`, params),
            storefrontProductSettings
        );
        return response.data;
    }
}
