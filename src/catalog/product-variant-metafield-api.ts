import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import { metafield_Full } from "../model/generated/catalog.v3";
import { metafield_Post, metafield_Put } from "../model/generated/channels.v3";
import { GetAllMetafieldsQueryParams } from "../model/query/metafield";
import { appendQueryString } from "../util";

export class ProductVariantMetafieldApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllMetafields<
        Params extends GetAllMetafieldsQueryParams,
        T extends metafield_Full
    >(
        productId: number,
        variantId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/variants/${variantId}/metafields`,
                params
            ),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createMetafield<T extends metafield_Post, R extends metafield_Full>(
        productId: number,
        variantId: number,
        metafield: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            metafield
        );
        return response.data;
    }

    async getMetafield<
        T extends metafield_Full,
        Params extends FieldAwareQueryParams
    >(
        productId: number,
        variantId: number,
        metafieldId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
                params
            )
        );
        return response.data;
    }

    async updateMetafield<T extends metafield_Put, R extends metafield_Full>(
        productId: number,
        variantId: number,
        metafieldId: number,
        metafield: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            metafield
        );
        return response.data;
    }

    async deleteMetafield(
        productId: number,
        variantId: number,
        metafieldId: number
    ): Promise<void> {
        const response = await this.apiClient.delete(
            `/v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`
        );
    }
}
