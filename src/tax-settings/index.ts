import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Tax_Settings } from "../model/generated/tax_settings.v3";

export class TaxSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getTaxSettings<T extends Tax_Settings>(): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/tax/settings`);
        return response.data;
    }

    async updateTaxSettings<T extends Tax_Settings>(
        taxSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/tax/settings`,
            taxSettings
        );
        return response.data;
    }
}
