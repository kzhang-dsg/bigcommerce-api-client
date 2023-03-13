import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { channel_menus_Post } from "../model/generated/channels.v3";
export declare class ChannelMenuApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getChannelMenus<T extends channel_menus_Post>(channelId: number): Promise<Data<T>>;
    createChannelMenus<T extends channel_menus_Post>(channelId: number, channelMenus: T): Promise<Data<T>>;
    deleteChannelMenus(channelId: number): Promise<Data<number>>;
}
