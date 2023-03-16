import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { RobotsTxtSettings } from "../model/generated/settings.v3";
export declare class StorefrontRobotsTxtSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStorefrontRobotsTxtSettings<T extends RobotsTxtSettings>(channelId?: number): Promise<Data<T>>;
    updateStorefrontRobotsTxtSettings<T extends RobotsTxtSettings>(storefrontRobotsTxtSettings: T, channelId?: number): Promise<Data<T>>;
}
