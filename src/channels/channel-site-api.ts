import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Site, site_Post, site_Put } from "../model/generated/channels.v3";

export class ChannelSiteApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getChannelSite<T extends Site>(channelId: number): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/channels/${channelId}/site`
        );
        return response.data;
    }

    async createChannelSite<T extends site_Post, R extends Site>(
        channelId: number,
        site: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/channels/${channelId}/site`,
            site
        );

        return response.data;
    }

    async updateChannelSite<T extends site_Put, R extends Site>(
        channelId: number,
        site: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/channels/${channelId}/site`,
            site
        );

        return response.data;
    }

    async deleteChannelSite(channelId: number): Promise<void> {
        await this.apiClient.delete(`/v3/channels/${channelId}/site`);
    }
}
