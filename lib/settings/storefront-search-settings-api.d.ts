import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontSearchSettings } from "../model/generated/settings.v3";
export declare class StorefrontSearchSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontSearchSettings<T extends StorefrontSearchSettings>(channelId?: number): Promise<Data<T>>;
    updateStorefrontSearchSettings<T extends StorefrontSearchSettings>(storefrontSearchSettings: T, channelId?: number): Promise<Data<T>>;
}
