import { ApiClient } from "../api-client";
import { ProductVariant } from "../model/product";
import {
    Data,
    FieldAwareQueryParams,
    Image,
    PaginatedData,
} from "../model/common";
import { appendQueryString } from "../util";
import { ReadStream } from "fs";
import FormData from "form-data";

export class ProductVariantApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariants<
        Params extends FieldAwareQueryParams,
        T extends ProductVariant
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/variants`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createVariant<T extends ProductVariant>(
        productId: number,
        variant: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/variants`,
            variant
        );
        return response.data;
    }

    async getVariant<
        T extends ProductVariant,
        Params extends FieldAwareQueryParams
    >(productId: number, variantId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/variants/${variantId}`,
                params
            )
        );
        return response.data;
    }

    async updateVariant<T extends ProductVariant>(
        productId: number,
        variant: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/variants/${variant.id}`,
            variant
        );
        return response.data;
    }

    async deleteVariant(productId: number, variantId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/variants/${variantId}`
        );
    }

    async createVariantImage<T extends Image>(
        productId: number,
        variantId: number,
        image: ReadStream
    ): Promise<Data<T>> {
        const formData = new FormData();
        formData.append("image_file", image);
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/variants/${variantId}/images`,
            formData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        return response.data;
    }
}
