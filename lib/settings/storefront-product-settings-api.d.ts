import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontProductSettings } from "../model/generated/settings.v3";
export declare class StorefrontProductSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontProductSettings<Params extends ChannelIdQueryParams, T extends StorefrontProductSettings>(params?: Params): Promise<Data<T>>;
    updateStorefrontProductSettings<Params extends ChannelIdQueryParams, T extends StorefrontProductSettings>(storefrontProductSettings: T, params?: Params): Promise<Data<T>>;
}
