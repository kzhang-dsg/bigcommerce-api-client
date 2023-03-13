import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { ActiveTheme } from "../model/generated/channels.v3";

export class ChannelActiveThemeApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getChannelActiveTheme<T extends ActiveTheme>(
        channelId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/channels/${channelId}/active-theme`
        );
        return response.data;
    }
}
