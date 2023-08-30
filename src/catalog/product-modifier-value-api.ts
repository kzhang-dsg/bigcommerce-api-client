import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    productModifierOptionValue_Full,
    productModifierOptionValue_Post,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductModifierValueApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllModifierValues<
        Params extends FieldAwareQueryParams,
        T extends productModifierOptionValue_Full
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
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createModifierValue<
        T extends productModifierOptionValue_Post,
        R extends productModifierOptionValue_Full
    >(
        productId: number,
        modifierId: number,
        modifierValue: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            modifierValue
        );
        return response.data;
    }

    async getModifierValue<
        T extends productModifierOptionValue_Full,
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

    async updateModifierValue<
        T extends productModifierOptionValue_Post,
        R extends productModifierOptionValue_Full
    >(
        productId: number,
        modifierId: number,
        modifierValueId: number,
        modifierValue: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${modifierValueId}`,
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
