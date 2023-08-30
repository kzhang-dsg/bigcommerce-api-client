import FormData from "form-data";
import { ReadStream } from "fs";

import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    productImage_Full,
    productImage_Post,
    productImage_Put,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductImageApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllImages<
        Params extends FieldAwareQueryParams,
        T extends productImage_Full
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
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createImage<T extends productImage_Post, R extends productImage_Full>(
        productId: number,
        image: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/images`,
            image
        );
        return response.data;
    }

    async uploadImage<T extends productImage_Full>(
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
        T extends productImage_Full,
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

    async updateImage<T extends productImage_Put, R extends productImage_Full>(
        productId: number,
        imageId: number,
        image: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/images/${imageId}`,
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
