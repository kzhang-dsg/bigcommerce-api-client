import { ApiClient } from "../api-client";
import { PricingRequest, PricingResponse } from "../model/generated/pricing.sf";
export declare class ProductApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    batchGetPrices<T extends PricingRequest, R extends PricingResponse>(pricingRequest: T): Promise<R>;
}
