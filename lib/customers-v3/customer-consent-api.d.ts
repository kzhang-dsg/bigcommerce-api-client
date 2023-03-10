import { ApiClient } from "../api-client";
import { consent_Full } from "../model/generated/customers.v3";
export declare class CustomerConsentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomerConsent<T extends consent_Full>(customerId: number): Promise<T>;
    updateCustomerConsent<T extends consent_Full>(customerId: number, customerConsent: T): Promise<T>;
}
