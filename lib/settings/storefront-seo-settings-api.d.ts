import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { SEOSettings } from "../model/generated/settings.v3";
export declare class StorefrontSeoSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontSeoSettings<Params extends ChannelIdQueryParams, T extends SEOSettings>(params?: Params): Promise<Data<T>>;
    updateStorefrontSeoSettings<Params extends ChannelIdQueryParams, T extends SEOSettings>(storefrontSeoSettings: T, params?: Params): Promise<Data<T>>;
}
