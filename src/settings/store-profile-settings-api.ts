import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { StoreProfile } from "../model/generated/settings.v3";

export class StoreProfileSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStoreProfileSettings<T extends StoreProfile>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/store/profile${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateStoreProfileSettings<T extends StoreProfile>(
        storeProfileSettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/store/profile${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            storeProfileSettings
        );
        return response.data;
    }
}
