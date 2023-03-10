import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { CustomerSettingsObject } from "../model/generated/customers.v3";

export class CustomerSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomerSettings<T extends CustomerSettingsObject>(): Promise<T> {
        const response = await this.apiClient.get("/v3/customers/settings");
        return response.data;
    }

    async updateCustomerSettings<T extends CustomerSettingsObject>(
        customerSettings: T
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.put(
            "/v3/customers/settings",
            customerSettings
        );

        return response.data;
    }
}
