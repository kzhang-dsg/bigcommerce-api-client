import { ApiClient } from "../api-client";
import { ProductReviewsQueryParams } from "../model/query/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { productReview_Full, productReview_Post, productReview_Put } from "../model/generated/catalog.v3";
export declare class ProductReviewApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllReviews<Params extends ProductReviewsQueryParams, T extends productReview_Full>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createReview<T extends productReview_Post, R extends productReview_Full>(productId: number, review: T): Promise<Data<R>>;
    getReview<T extends productReview_Full, Params extends FieldAwareQueryParams>(productId: number, reviewId: number, params?: Params): Promise<Data<T>>;
    updateReview<T extends productReview_Put, R extends productReview_Full>(productId: number, reviewId: number, review: T): Promise<Data<R>>;
    deleteReview(productId: number, reviewId: number): Promise<void>;
}
