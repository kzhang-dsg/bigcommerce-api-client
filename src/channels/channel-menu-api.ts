import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { channel_menus_Post } from "../model/generated/channels.v3";

export class ChannelMenuApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getChannelMenus<T extends channel_menus_Post>(
        channelId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/channels/${channelId}/channel-menus`
        );
        return response.data;
    }

    async createChannelMenus<T extends channel_menus_Post>(
        channelId: number,
        channelMenus: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/channels/${channelId}/channel-menus`,
            channelMenus
        );

        return response.data;
    }

    async deleteChannelMenus(channelId: number): Promise<Data<number>> {
        const response = await this.apiClient.delete(
            `/v3/channels/${channelId}/channel-menus`
        );
        return response.data;
    }
}
