import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    ChannelOrderSettings,
    GlobalOrderSettings,
} from "../model/generated/orders.v3";

export class OrderSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getGlobalOrderSettings<T extends GlobalOrderSettings>(): Promise<
        Data<T>
    > {
        const response = await this.apiClient.get(`/v3/order/settings`);
        return response.data;
    }

    async updateGlobalOrderSettings<T extends GlobalOrderSettings>(
        orderSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/order/settings`,
            orderSettings
        );
        return response.data;
    }

    async getChannelOrderSettings<T extends ChannelOrderSettings>(
        channelId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/order/settings/channels/${channelId}`
        );
        return response.data;
    }

    async updateChannelOrderSettings<T extends ChannelOrderSettings>(
        channelId: number,
        orderSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/order/settings/channels/${channelId}`,
            orderSettings
        );
        return response.data;
    }
}
