import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { CatalogSettings } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class CatalogSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCatalogSettings<
        Params extends ChannelIdQueryParams,
        T extends CatalogSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/catalog`, params)
        );
        return response.data;
    }

    async updateCatalogSettings<
        Params extends ChannelIdQueryParams,
        T extends CatalogSettings
    >(catalogSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/catalog`, params),
            catalogSettings
        );
        return response.data;
    }
}
