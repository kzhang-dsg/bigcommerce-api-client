import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CatalogSettings } from "../model/generated/settings.v3";

export class CatalogSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCatalogSettings<T extends CatalogSettings>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/catalog${channelId ? "?channel_id=" + channelId : ""}`
        );
        return response.data;
    }

    async updateCatalogSettings<T extends CatalogSettings>(
        catalogSettings: T,
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/catalog${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            catalogSettings
        );
        return response.data;
    }
}
