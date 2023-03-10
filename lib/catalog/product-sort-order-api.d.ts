import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { productSortOrder } from "../model/generated/catalog.v3";
export declare class ProductSortOrderApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getProductSortOrder<T extends productSortOrder>(categoryId: number): Promise<PaginatedData<T>>;
    updateProductSortOrder<T extends productSortOrder>(categoryId: number, productSortOrders: T[]): Promise<T[]>;
}
