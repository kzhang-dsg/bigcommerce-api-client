import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    AddressProperties,
    Checkout,
    CheckoutsSettings,
} from "../model/generated/checkouts.v3";

export class CheckoutSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCheckoutSettings<T extends CheckoutsSettings>(): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/checkouts/settings`);
        return response.data;
    }

    async updateCheckoutSettings<T extends CheckoutsSettings>(
        checkoutSettings: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/checkouts/settings`,
            checkoutSettings
        );
        return response.data;
    }
}
