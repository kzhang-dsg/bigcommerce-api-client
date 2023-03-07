import { ApiClient } from "../api-client";
import { CustomerApi } from "./customer-api";
export declare class CustomersV2Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly customers: CustomerApi;
}
