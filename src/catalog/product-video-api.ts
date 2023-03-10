import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import {
    productVideo_Full,
    productVideo_Post,
    productVideo_Put,
} from "../model/generated/catalog.v3";
import { appendQueryString } from "../util";

export class ProductVideoApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVideos<
        Params extends FieldAwareQueryParams,
        T extends productVideo_Full
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/videos`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createVideo<T extends productVideo_Post, R extends productVideo_Full>(
        productId: number,
        video: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/videos`,
            video
        );
        return response.data;
    }

    async getVideo<
        T extends productVideo_Full,
        Params extends FieldAwareQueryParams
    >(productId: number, videoId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/videos/${videoId}`,
                params
            )
        );
        return response.data;
    }

    async updateVideo<T extends productVideo_Put, R extends productVideo_Full>(
        productId: number,
        videoId: number,
        video: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/videos/${videoId}`,
            video
        );
        return response.data;
    }

    async deleteVideo(productId: number, videoId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/videos/${videoId}`
        );
    }
}
