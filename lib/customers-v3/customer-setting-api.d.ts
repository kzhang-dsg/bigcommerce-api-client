import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { CustomerSettingsObject } from "../model/generated/customers.v3";
export declare class CustomerSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomerSettings<T extends CustomerSettingsObject>(): Promise<T>;
    updateCustomerSettings<T extends CustomerSettingsObject>(customerSettings: T): Promise<PaginatedData<T>>;
}
