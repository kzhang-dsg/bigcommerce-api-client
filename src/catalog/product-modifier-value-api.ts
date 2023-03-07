import { ApiClient } from "../api-client";
import { ProductModifierValue } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductModifierValueApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllModifierValues<
        Params extends FieldAwareQueryParams,
        T extends ProductModifierValue
    >(
        productId: number,
        modifierId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createModifierValue<T extends ProductModifierValue>(
        productId: number,
        modifierId: number,
        modifierValue: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            modifierValue
        );
        return response.data;
    }

    async getModifierValue<
        T extends ProductModifierValue,
        Params extends FieldAwareQueryParams
    >(
        productId: number,
        modifierId: number,
        valueId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
                params
            )
        );
        return response.data;
    }

    async updateModifierValue<T extends ProductModifierValue>(
        productId: number,
        modifierId: number,
        modifierValue: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${modifierValue.id}`,
            modifierValue
        );
        return response.data;
    }

    async deleteModifierValue(
        productId: number,
        modifierId: number,
        valueId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`
        );
    }
}
