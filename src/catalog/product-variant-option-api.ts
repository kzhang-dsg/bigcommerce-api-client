import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import {
    productOption_Full,
    productOption_Post,
    productOption_Put,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductVariantOptionApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariantOptions<
        Params extends FieldAwareQueryParams,
        T extends productOption_Full
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/options`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createVariantOption<
        T extends productOption_Post,
        R extends productOption_Full
    >(productId: number, option: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/options`,
            option
        );
        return response.data;
    }

    async getVariantOption<
        T extends productOption_Full,
        Params extends FieldAwareQueryParams
    >(productId: number, optionId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/options/${optionId}`,
                params
            )
        );
        return response.data;
    }

    async updateVariantOption<
        T extends productOption_Put,
        R extends productOption_Full
    >(productId: number, optionId: number, option: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/options/${optionId}`,
            option
        );
        return response.data;
    }

    async deleteVariantOption(
        productId: number,
        optionId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/options/${optionId}`
        );
    }
}
