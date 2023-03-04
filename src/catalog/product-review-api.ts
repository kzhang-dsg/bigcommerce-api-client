import { ApiClient } from "../api-client";
import { ProductReview, ProductReviewsQueryParams } from "../model/product";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductReviewApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllReviews<
        Params extends ProductReviewsQueryParams,
        T extends ProductReview
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

    async createReview<T extends ProductReview>(
        productId: number,
        review: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/catalog/products/${productId}/reviews`,
            review
        );
        return response.data;
    }

    async getReview<
        T extends ProductReview,
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

    async updateReview<T extends ProductReview>(
        productId: number,
        review: T
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/products/${productId}/reviews/${review.id}`,
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
