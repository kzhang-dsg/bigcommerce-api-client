import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Site, site_Post, site_Put } from "../model/generated/channels.v3";
export declare class ChannelSiteApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getChannelSite<T extends Site>(channelId: number): Promise<Data<T>>;
    createChannelSite<T extends site_Post, R extends Site>(channelId: number, site: T): Promise<Data<R>>;
    updateChannelSite<T extends site_Put, R extends Site>(channelId: number, site: T): Promise<Data<R>>;
    deleteChannelSite(channelId: number): Promise<void>;
}
