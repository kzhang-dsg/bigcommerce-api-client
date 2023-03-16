import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontStatus } from "../model/generated/settings.v3";
export declare class StorefrontStatusSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontStatusSettings<T extends StorefrontStatus>(channelId?: number): Promise<Data<T>>;
    updateStorefrontStatusSettings<T extends StorefrontStatus>(storefrontStatusSettings: T, channelId?: number): Promise<Data<T>>;
}
