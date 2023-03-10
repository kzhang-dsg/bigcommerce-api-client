import { ApiClient } from "../api-client";
import {
    CategoriesQueryParams,
    DeleteCategoriesBatchQueryParams,
} from "../model/query/catalog";
import { PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import {
    Category,
    CreateCategories,
    UpdateCategories,
} from "../model/generated/catalog.v3";

export class CategoryBatchApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCategories<
        Params extends CategoriesQueryParams,
        T extends Category
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/catalog/trees/categories", params),
            page,
            limit
        );
        return response.data;
    }

    async createCategories<T extends CreateCategories, R extends Category>(
        categories: T
    ): Promise<PaginatedData<R>> {
        const response = await this.apiClient.post(
            "/v3/catalog/trees/categories",
            categories
        );
        return response.data;
    }

    async updateCategories<T extends UpdateCategories>(
        categories: T
    ): Promise<void> {
        await this.apiClient.put("/v3/catalog/trees/categories", categories);
    }

    async deleteCategories<Params extends DeleteCategoriesBatchQueryParams>(
        params?: Params
    ): Promise<void> {
        const response = await this.apiClient.delete(
            appendQueryString("/v3/catalog/trees/categories", params)
        );
        return response.data;
    }
}
