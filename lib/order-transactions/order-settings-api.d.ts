import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { ChannelOrderSettings, GlobalOrderSettings } from "../model/generated/orders.v3";
export declare class OrderSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getGlobalOrderSettings<T extends GlobalOrderSettings>(): Promise<Data<T>>;
    updateGlobalOrderSettings<T extends GlobalOrderSettings>(orderSettings: T): Promise<Data<T>>;
    getChannelOrderSettings<T extends ChannelOrderSettings>(channelId: number): Promise<Data<T>>;
    updateChannelOrderSettings<T extends ChannelOrderSettings>(channelId: number, orderSettings: T): Promise<Data<T>>;
}
