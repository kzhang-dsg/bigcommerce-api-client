import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { LogoSettings, LogoSettingsUpdate } from "../model/generated/settings.v3";
export declare class LogoSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getLogoSettings<T extends LogoSettings>(channelId?: number): Promise<Data<T>>;
    updateLogoSettings<T extends LogoSettingsUpdate, R extends LogoSettings>(logoSettings: T, channelId?: number): Promise<Data<R>>;
}
