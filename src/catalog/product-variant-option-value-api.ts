import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    productOptionOptionValue_Base,
    productOptionOptionValue_Full,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductVariantOptionValueApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariantOptionValues<
        Params extends FieldAwareQueryParams,
        T extends productOptionOptionValue_Full
    >(
        productId: number,
        optionId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/options/${optionId}/values`,
                params
            ),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createVariantOptionValue<
        T extends productOptionOptionValue_Base,
        R extends productOptionOptionValue_Full
    >(productId: number, optionId: number, optionValue: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/options/${optionId}/values`,
            optionValue
        );
        return response.data;
    }

    async getVariantOptionValue<
        T extends productOptionOptionValue_Full,
        Params extends FieldAwareQueryParams
    >(
        productId: number,
        optionId: number,
        valueId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
                params
            )
        );
        return response.data;
    }

    async updateVariantOptionValue<T extends productOptionOptionValue_Base>(
        productId: number,
        optionId: number,
        optionValueId: number,
        optionValue: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/options/${optionId}/values/${optionValueId}`,
            optionValue
        );
        return response.data;
    }

    async deleteVariantOptionValue(
        productId: number,
        optionId: number,
        valueId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`
        );
    }
}
