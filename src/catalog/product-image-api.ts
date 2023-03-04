import { ApiClient } from "../api-client";
import { ProductImage } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import FormData from "form-data";
import { ReadStream } from "fs";

export class ProductImageApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllImages<
        Params extends FieldAwareQueryParams,
        T extends ProductImage
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/images`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createImage<T extends ProductImage>(
        productId: number,
        image: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/images`,
            image
        );
        return response.data;
    }

    async uploadImage<T extends ProductImage>(
        productId: number,
        image: ReadStream,
        imageId?: number
    ): Promise<Data<T>> {
        const formData = new FormData();
        formData.append("image_file", image);
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/images${
                imageId ? "/" + imageId : ""
            }`,
            formData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );
        return response.data;
    }

    async getImage<
        T extends ProductImage,
        Params extends FieldAwareQueryParams
    >(productId: number, imageId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/images/${imageId}`,
                params
            )
        );
        return response.data;
    }

    async updateImage<T extends ProductImage>(
        productId: number,
        image: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/images/${image.id}`,
            image
        );
        return response.data;
    }

    async deleteImage(productId: number, imageId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/images/${imageId}`
        );
    }
}
