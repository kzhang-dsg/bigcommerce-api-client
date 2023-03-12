import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { AbandonedCartSettings } from "../model/generated/abandoned_carts.v3";

export class AbandonedCartSSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getGlobalAbandonedCartSettings<
        T extends AbandonedCartSettings
    >(): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/abandoned-carts/settings`
        );
        return response.data;
    }

    async updateGlobalAbandonedCartSettings<T extends AbandonedCartSettings>(
        abandonedCartSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/abandoned-carts/settings`,
            abandonedCartSettings
        );
        return response.data;
    }

    async getChannelAbandonedCartSettings<T extends AbandonedCartSettings>(
        channelId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/abandoned-carts/settings/channels/${channelId}`
        );
        return response.data;
    }

    async updateChannelAbandonedCartSettings<T extends AbandonedCartSettings>(
        channelId: number,
        abandonedCartSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/abandoned-carts/settings/channels/${channelId}`,
            abandonedCartSettings
        );
        return response.data;
    }
}
