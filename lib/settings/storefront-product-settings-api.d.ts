import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontProductSettings } from "../model/generated/settings.v3";
export declare class StorefrontProductSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontProductSettings<T extends StorefrontProductSettings>(channelId?: number): Promise<Data<T>>;
    updateStorefrontProductSettings<T extends StorefrontProductSettings>(storefrontProductSettings: T, channelId?: number): Promise<Data<T>>;
}
