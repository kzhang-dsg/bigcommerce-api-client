import { ApiClient } from "../api-client";
import { ProductBuckPricingRule } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductBuckPricingRuleApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllBuckPricingRules<
        Params extends FieldAwareQueryParams,
        T extends ProductBuckPricingRule
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
            limit
        );
        return response.data;
    }

    async createBuckPricingRule<T extends ProductBuckPricingRule>(
        productId: number,
        buckPricingRule: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/bulk-pricing-rules`,
            buckPricingRule
        );
        return response.data;
    }

    async getBuckPricingRule<
        T extends ProductBuckPricingRule,
        Params extends FieldAwareQueryParams
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

    async updateBuckPricingRule<T extends ProductBuckPricingRule>(
        productId: number,
        buckPricingRule: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/bulk-pricing-rules/${buckPricingRule.id}`,
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
