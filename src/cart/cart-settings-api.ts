import { ApiClient } from "../api-client";
import { CartSettings } from "../model/cart";
import { Data } from "../model/common";

export class CartSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getGlobalCartSettings<T extends CartSettings>(): Promise<Data<T>> {
        const response = await this.apiClient.get("/v3/carts/settings");
        return response.data;
    }

    async updateGlobalCartSettings<T extends CartSettings>(
        cartSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            "/v3/carts/settings",
            cartSettings
        );
        return response.data;
    }

    async getChannelCartSettings<T extends CartSettings>(): Promise<Data<T>> {
        const response = await this.apiClient.get("/v3/carts/settings");
        return response.data;
    }

    async updateChannelCartSettings<T extends CartSettings>(
        channelId: number,
        cartSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/carts/settings/channels/${channelId}`,
            cartSettings
        );
        return response.data;
    }
}
