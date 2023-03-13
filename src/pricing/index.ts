import { ApiClient } from "../api-client";
import { ProductApi } from "./product-api";

export class PricingApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly products = new ProductApi(this.apiClient);
}
