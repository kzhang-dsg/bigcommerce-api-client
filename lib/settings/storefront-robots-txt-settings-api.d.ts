import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { RobotsTxtSettings } from "../model/generated/settings.v3";
export declare class StorefrontRobotsTxtSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontRobotsTxtSettings<Params extends ChannelIdQueryParams, T extends RobotsTxtSettings>(params?: Params): Promise<Data<T>>;
    updateStorefrontRobotsTxtSettings<Params extends ChannelIdQueryParams, T extends RobotsTxtSettings>(storefrontRobotsTxtSettings: T, params?: Params): Promise<Data<T>>;
}
