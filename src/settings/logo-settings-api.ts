import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import {
    LogoSettings,
    LogoSettingsUpdate,
} from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class LogoSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getLogoSettings<
        Params extends ChannelIdQueryParams,
        T extends LogoSettings
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/logo`, params)
        );
        return response.data;
    }

    async updateLogoSettings<
        Params extends ChannelIdQueryParams,
        T extends LogoSettingsUpdate,
        R extends LogoSettings
    >(logoSettings: T, params?: Params): Promise<Data<R>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/logo`, params),
            logoSettings
        );
        return response.data;
    }
}
