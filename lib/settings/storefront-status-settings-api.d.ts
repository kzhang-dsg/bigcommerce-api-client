import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontStatus } from "../model/generated/settings.v3";
export declare class StorefrontStatusSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontStatusSettings<Params extends ChannelIdQueryParams, T extends StorefrontStatus>(params?: Params): Promise<Data<T>>;
    updateStorefrontStatusSettings<Params extends ChannelIdQueryParams, T extends StorefrontStatus>(storefrontStatusSettings: T, params?: Params): Promise<Data<T>>;
}
