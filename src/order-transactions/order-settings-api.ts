import { ApiClient } from "../api-client";
import {
    ChannelOrderSettings,
    ChannelOrderSettingsResponse,
    GlobalOrderSettings,
    GlobalOrderSettingsResponse,
} from "../model/generated/orders.v3";

export class OrderSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getGlobalOrderSettings<
        T extends GlobalOrderSettingsResponse
    >(): Promise<T> {
        const response = await this.apiClient.get(`/v3/order/settings`);
        return response.data;
    }

    async updateGlobalOrderSettings<
        T extends GlobalOrderSettings,
        R extends GlobalOrderSettingsResponse
    >(orderSettings: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v3/order/settings`,
            orderSettings
        );
        return response.data;
    }

    async getChannelOrderSettings<T extends ChannelOrderSettingsResponse>(
        channelId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/order/settings/channels/${channelId}`
        );
        return response.data;
    }

    async updateChannelOrderSettings<
        T extends ChannelOrderSettings,
        R extends ChannelOrderSettingsResponse
    >(channelId: number, orderSettings: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v3/order/settings/channels/${channelId}`,
            orderSettings
        );
        return response.data;
    }
}
