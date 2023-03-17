import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StoreProfile } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class StoreProfileSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStoreProfileSettings<
        Params extends ChannelIdQueryParams,
        T extends StoreProfile
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/store/profile`, params)
        );
        return response.data;
    }

    async updateStoreProfileSettings<
        Params extends ChannelIdQueryParams,
        T extends StoreProfile
    >(storeProfileSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/store/profile`, params),
            storeProfileSettings
        );
        return response.data;
    }
}
