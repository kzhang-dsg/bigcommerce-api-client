import { ApiClient } from "../api-client";
import { ProductReview, ProductReviewsQueryParams } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductReviewApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllReviews<Params extends ProductReviewsQueryParams, T extends ProductReview>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createReview<T extends ProductReview>(productId: number, review: T): Promise<Data<T>>;
    getReview<T extends ProductReview, Params extends FieldAwareQueryParams>(productId: number, reviewId: number, params?: Params): Promise<Data<T>>;
    updateReview<T extends ProductReview>(productId: number, review: T): Promise<Data<T>>;
    deleteReview(productId: number, reviewId: number): Promise<void>;
}
