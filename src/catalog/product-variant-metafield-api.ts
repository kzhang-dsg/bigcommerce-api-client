import { ApiClient } from "../api-client";
import { Metafield, GetAllMetafieldsParams } from "../model/metafield";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductVariantMetafieldApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllMetafields<
        Params extends GetAllMetafieldsParams,
        T extends Metafield
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
            limit
        );
        return response.data;
    }

    async createMetafield<T extends Metafield>(
        productId: number,
        variantId: number,
        metafield: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            metafield
        );
        return response.data;
    }

    async getMetafield<
        T extends Metafield,
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

    async updateMetafield<T extends Metafield>(
        productId: number,
        variantId: number,
        metafield: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafield.id}`,
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
