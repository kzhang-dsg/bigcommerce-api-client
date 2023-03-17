import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontSearchSettings } from "../model/generated/settings.v3";
export declare class StorefrontSearchSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontSearchSettings<Params extends ChannelIdQueryParams, T extends StorefrontSearchSettings>(params?: Params): Promise<Data<T>>;
    updateStorefrontSearchSettings<Params extends ChannelIdQueryParams, T extends StorefrontSearchSettings>(storefrontSearchSettings: T, params?: Params): Promise<Data<T>>;
}
