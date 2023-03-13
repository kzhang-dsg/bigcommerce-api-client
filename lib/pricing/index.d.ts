import { ApiClient } from "../api-client";
import { ProductApi } from "./product-api";
export declare class PricingApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly products: ProductApi;
}
