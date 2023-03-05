import { ApiClient } from "../api-client";
import {
    ProductCategoryAssignment,
    ProductCategoryAssignmentsQueryParams,
} from "../model/product";
import { PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductCategoryAssignmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCategoryAssignments<
        Params extends ProductCategoryAssignmentsQueryParams,
        T extends ProductCategoryAssignment
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/category-assignments`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createCategoryAssignment<T extends ProductCategoryAssignment>(
        categoryAssignments: T[]
    ): Promise<void> {
        await this.apiClient.post(
            `/v3/catalog/products/category-assignments`,
            categoryAssignments
        );
    }

    async deleteCategoryAssignment<
        Params extends ProductCategoryAssignmentsQueryParams
    >(params: Params): Promise<void> {
        await this.apiClient.delete(
            appendQueryString(
                `/v3/catalog/products/category-assignments`,
                params
            )
        );
    }
}
