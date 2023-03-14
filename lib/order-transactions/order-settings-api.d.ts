import { ApiClient } from "../api-client";
import { ChannelOrderSettings, ChannelOrderSettingsResponse, GlobalOrderSettings, GlobalOrderSettingsResponse } from "../model/generated/orders.v3";
export declare class OrderSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getGlobalOrderSettings<T extends GlobalOrderSettingsResponse>(): Promise<T>;
    updateGlobalOrderSettings<T extends GlobalOrderSettings, R extends GlobalOrderSettingsResponse>(orderSettings: T): Promise<R>;
    getChannelOrderSettings<T extends ChannelOrderSettingsResponse>(channelId: number): Promise<T>;
    updateChannelOrderSettings<T extends ChannelOrderSettings, R extends ChannelOrderSettingsResponse>(channelId: number, orderSettings: T): Promise<R>;
}
