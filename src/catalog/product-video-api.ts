import { ApiClient } from "../api-client";
import { ProductVideo } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductVideoApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVideos<
        Params extends FieldAwareQueryParams,
        T extends ProductVideo
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

    async createVideo<T extends ProductVideo>(
        productId: number,
        video: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/videos`,
            video
        );
        return response.data;
    }

    async getVideo<
        T extends ProductVideo,
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

    async updateVideo<T extends ProductVideo>(
        productId: number,
        video: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/videos/${video.id}`,
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
