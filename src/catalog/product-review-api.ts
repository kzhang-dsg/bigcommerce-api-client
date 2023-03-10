import { ApiClient } from "../api-client";
import { ProductReviewsQueryParams } from "../model/query/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import {
    productReview_Full,
    productReview_Post,
    productReview_Put,
} from "../model/generated/catalog.v3";

export class ProductReviewApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllReviews<
        Params extends ProductReviewsQueryParams,
        T extends productReview_Full
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/reviews`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createReview<
        T extends productReview_Post,
        R extends productReview_Full
    >(productId: number, review: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/reviews`,
            review
        );
        return response.data;
    }

    async getReview<
        T extends productReview_Full,
        Params extends FieldAwareQueryParams
    >(productId: number, reviewId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/${productId}/reviews/${reviewId}`,
                params
            )
        );
        return response.data;
    }

    async updateReview<
        T extends productReview_Put,
        R extends productReview_Full
    >(productId: number, reviewId: number, review: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/reviews/${reviewId}`,
            review
        );
        return response.data;
    }

    async deleteReview(productId: number, reviewId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/catalog/products/${productId}/reviews/${reviewId}`
        );
    }
}
