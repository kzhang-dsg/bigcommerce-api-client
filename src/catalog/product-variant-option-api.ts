import { ApiClient } from "../api-client";
import { ProductOption } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductVariantOptionApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariantOptions<
        Params extends FieldAwareQueryParams,
        T extends ProductOption
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

    async createVariantOption<T extends ProductOption>(
        productId: number,
        option: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/options`,
            option
        );
        return response.data;
    }

    async getVariantOption<
        T extends ProductOption,
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

    async updateVariantOption<T extends ProductOption>(
        productId: number,
        option: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/options/${option.id}`,
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
