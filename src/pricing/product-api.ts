import { ApiClient } from "../api-client";
import { PricingRequest, PricingResponse } from "../model/generated/pricing.sf";

const MAX_BATCH_SIZE = 50;

export class ProductApi {
    constructor(private readonly apiClient: ApiClient) {}

    async batchGetPrices<T extends PricingRequest, R extends PricingResponse>(
        pricingRequest: T
    ): Promise<R> {
        let result: PricingResponse = { data: [], meta: {} };
        let items = pricingRequest.items?.slice();

        if (items) {
            for (let i = 0; i < (items.length || 0); i += MAX_BATCH_SIZE) {
                pricingRequest.items = items.slice(i, i + MAX_BATCH_SIZE);
                const response = await this.apiClient.post(
                    "/v3/pricing/products",
                    pricingRequest
                );
                result.data = result.data?.concat(response.data.data);
            }
        }

        return result as R;
    }
}
