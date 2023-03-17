import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { LogoSettings, LogoSettingsUpdate } from "../model/generated/settings.v3";
export declare class LogoSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getLogoSettings<Params extends ChannelIdQueryParams, T extends LogoSettings>(params?: Params): Promise<Data<T>>;
    updateLogoSettings<Params extends ChannelIdQueryParams, T extends LogoSettingsUpdate, R extends LogoSettings>(logoSettings: T, params?: Params): Promise<Data<R>>;
}
