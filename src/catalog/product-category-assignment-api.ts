import { ApiClient } from "../api-client";
import { ProductCategoryAssignmentsQueryParams } from "../model/query/catalog";
import { PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import { ExtendedProductCategoryAssignment } from "../model/extended";

export class ProductCategoryAssignmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCategoryAssignments<
        Params extends ProductCategoryAssignmentsQueryParams,
        T extends ExtendedProductCategoryAssignment
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

    async createCategoryAssignments<
        T extends ExtendedProductCategoryAssignment
    >(categoryAssignments: T[]): Promise<void> {
        await this.apiClient.post(
            `/v3/catalog/products/category-assignments`,
            categoryAssignments
        );
    }

    async deleteCategoryAssignments<
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
