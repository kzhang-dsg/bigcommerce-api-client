import { ApiClient } from "../api-client";
import { CustomerApi } from "./customer-api";

export class CustomersV2Api {
    constructor(private readonly apiClient: ApiClient) {}

    readonly customers = new CustomerApi(this.apiClient);
}
