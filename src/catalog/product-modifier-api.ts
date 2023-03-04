import { ApiClient } from "../api-client";
import { ProductModifier } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductModifierApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllModifiers<
        Params extends FieldAwareQueryParams,
        T extends ProductModifier
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/modifiers`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createModifier<T extends ProductModifier>(
        productId: number,
        modifier: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/modifiers`,
            modifier
        );
        return response.data;
    }

    async getModifier<
        T extends ProductModifier,
        Params extends FieldAwareQueryParams
    >(
        productId: number,
        modifierId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/modifiers/${modifierId}`,
                params
            )
        );
        return response.data;
    }

    async updateModifier<T extends ProductModifier>(
        productId: number,
        modifier: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/modifiers/${modifier.id}`,
            modifier
        );
        return response.data;
    }

    async deleteModifier(productId: number, modifierId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}`
        );
    }
}
