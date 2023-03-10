import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { productSortOrder } from "../model/generated/catalog.v3";

export class ProductSortOrderApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getProductSortOrder<T extends productSortOrder>(
        categoryId: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/catalog/categories/${categoryId}/products/sort-order`
        );
        return response.data;
    }

    async updateProductSortOrder<T extends productSortOrder>(
        categoryId: number,
        productSortOrders: T[]
    ): Promise<T[]> {
        const response = await this.apiClient.put(
            `/v3/catalog/categories/${categoryId}/products/sort-order`,
            productSortOrders
        );
        return response.data;
    }
}
