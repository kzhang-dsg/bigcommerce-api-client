import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { ActiveTheme } from "../model/generated/channels.v3";
export declare class ChannelActiveThemeApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getChannelActiveTheme<T extends ActiveTheme>(channelId: number): Promise<Data<T>>;
}
