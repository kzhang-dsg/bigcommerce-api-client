import { ApiClient } from "../api-client";
import { PaginatedData, ProductSortOrder } from "../model/common";
export declare class ProductSortOrderApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getProductSortOrder<T extends ProductSortOrder>(categoryId: number): Promise<PaginatedData<T>>;
    updateProductSortOrder<T extends ProductSortOrder>(categoryId: number, productSortOrders: T[]): Promise<T[]>;
}
