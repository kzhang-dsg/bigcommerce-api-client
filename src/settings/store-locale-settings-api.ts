import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Locale } from "../model/generated/settings.v3";

export class StoreLocaleSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getLocaleSettings<T extends Locale>(): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/settings/locale`);
        return response.data;
    }

    async updateLocaleSettings<T extends Locale>(
        localeSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/locale`,
            localeSettings
        );
        return response.data;
    }
}
