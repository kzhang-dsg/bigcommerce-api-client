import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    bulkPricingRule_Full,
    bulkPricingRuleFull_Response,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductBuckPricingRuleApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllBuckPricingRules<
        Params extends FieldAwareQueryParams,
        T extends bulkPricingRuleFull_Response
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/bulk-pricing-rules`,
                params
            ),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createBuckPricingRule<
        T extends bulkPricingRule_Full,
        R extends bulkPricingRuleFull_Response
    >(productId: number, buckPricingRule: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/bulk-pricing-rules`,
            buckPricingRule
        );
        return response.data;
    }

    async getBuckPricingRule<
        Params extends FieldAwareQueryParams,
        T extends bulkPricingRuleFull_Response
    >(
        productId: number,
        buckPricingRuleId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/bulk-pricing-rules/${buckPricingRuleId}`,
                params
            )
        );
        return response.data;
    }

    async updateBuckPricingRule<
        T extends bulkPricingRule_Full,
        R extends bulkPricingRuleFull_Response
    >(
        productId: number,
        buckPricingRuleId: number,
        buckPricingRule: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/bulk-pricing-rules/${buckPricingRuleId}`,
            buckPricingRule
        );
        return response.data;
    }

    async deleteBuckPricingRule(
        productId: number,
        buckPricingRuleId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/bulk-pricing-rules/${buckPricingRuleId}`
        );
    }
}
