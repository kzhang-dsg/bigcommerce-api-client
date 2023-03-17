import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { StorefrontSecuritySettings } from "../model/generated/settings.v3";
export declare class StorefrontSecuritySettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontSecuritySettings<Params extends ChannelIdQueryParams, T extends StorefrontSecuritySettings>(params?: Params): Promise<Data<T>>;
    updateStorefrontSecuritySettings<Params extends ChannelIdQueryParams, T extends StorefrontSecuritySettings>(storefrontSecuritySettings: T, params?: Params): Promise<Data<T>>;
}
