import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    LogoSettings,
    LogoSettingsUpdate,
} from "../model/generated/settings.v3";

export class LogoSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getLogoSettings<T extends LogoSettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/logo${channelId ? "?channel_id=" + channelId : ""}`
        );
        return response.data;
    }

    async updateLogoSettings<
        T extends LogoSettingsUpdate,
        R extends LogoSettings
    >(logoSettings: T, channelId?: number): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/settings/logo${channelId ? "?channel_id=" + channelId : ""}`,
            logoSettings
        );
        return response.data;
    }
}
