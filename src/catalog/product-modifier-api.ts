import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    productModifier_Full,
    productModifier_Post,
    productModifier_Put,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductModifierApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllModifiers<
        Params extends FieldAwareQueryParams,
        T extends productModifier_Full
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
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createModifier<
        T extends productModifier_Post,
        R extends productModifier_Full
    >(productId: number, modifier: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/modifiers`,
            modifier
        );
        return response.data;
    }

    async getModifier<
        T extends productModifier_Full,
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

    async updateModifier<
        T extends productModifier_Put,
        R extends productModifier_Full
    >(productId: number, modifierId: number, modifier: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/modifiers/${modifierId}`,
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
