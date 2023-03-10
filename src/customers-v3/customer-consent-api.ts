import { ApiClient } from "../api-client";
import { consent_Full } from "../model/generated/customers.v3";

export class CustomerConsentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomerConsent<T extends consent_Full>(
        customerId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/customers/${customerId}/consent`
        );
        return response.data;
    }

    async updateCustomerConsent<T extends consent_Full>(
        customerId: number,
        customerConsent: T
    ): Promise<T> {
        const response = await this.apiClient.put(
            `/v3/customers/${customerId}/consent`,
            customerConsent
        );
        return response.data;
    }
}
