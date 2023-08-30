import { ApiClient } from "../api-client";
import { Limit, PaginatedData } from "../model/common";
import { ProductCategoryAssignment } from "../model/generated/catalog.v3";
import { ProductCategoryAssignmentsQueryParams } from "../model/query/catalog";
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
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createCategoryAssignments<T extends ProductCategoryAssignment>(
        categoryAssignments: T[]
    ): Promise<void> {
        await this.apiClient.put(
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
