import { ApiClient } from "../api-client";
import { ProductComplexRule } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductComplexRuleApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllComplexRules<
        Params extends FieldAwareQueryParams,
        T extends ProductComplexRule
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/complex-rules`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createComplexRule<T extends ProductComplexRule>(
        productId: number,
        complexRule: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/complex-rules`,
            complexRule
        );
        return response.data;
    }

    async getComplexRule<
        T extends ProductComplexRule,
        Params extends FieldAwareQueryParams
    >(
        productId: number,
        complexRuleId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
                params
            )
        );
        return response.data;
    }

    async updateComplexRule<T extends ProductComplexRule>(
        productId: number,
        complexRule: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/complex-rules/${complexRule.id}`,
            complexRule
        );
        return response.data;
    }

    async deleteComplexRule(
        productId: number,
        complexRuleId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/complex-rules/${complexRuleId}`
        );
    }
}
