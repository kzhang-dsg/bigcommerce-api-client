import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StorefrontSecuritySettings } from "../model/generated/settings.v3";
export declare class StorefrontSecuritySettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontSecuritySettings<T extends StorefrontSecuritySettings>(channelId?: number): Promise<Data<T>>;
    updateStorefrontSecuritySettings<T extends StorefrontSecuritySettings>(storefrontSecuritySettings: T, channelId?: number): Promise<Data<T>>;
}
