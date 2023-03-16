import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { SEOSettings } from "../model/generated/settings.v3";
export declare class StorefrontSeoSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontSeoSettings<T extends SEOSettings>(channelId?: number): Promise<Data<T>>;
    updateStorefrontSeoSettings<T extends SEOSettings>(storefrontSeoSettings: T, channelId?: number): Promise<Data<T>>;
}
