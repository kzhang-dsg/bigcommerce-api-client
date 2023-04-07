import { ApiClient } from "../api-client";
import { CategoriesQueryParams } from "../model/query/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";
import { Category, category_Post, category_Put, category_Full } from "../model/generated/catalog.v3";

export class CategoryApi {
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
            appendQueryString("/v3/catalog/categories", params),
            page,
            limit
        );
        return response.data;
    }

    async createCategory<T extends category_Post, R extends category_Full>(category: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/catalog/categories",
            category
        );
        return response.data;
    }

    async deleteCategories<Params extends CategoriesQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/catalog/categories", params)
        );
    }

    async getCategory<Params extends FieldAwareQueryParams, T extends category_Full>(
        categoryId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/categories/${categoryId}`, params)
        );
        return response.data;
    }

    async updateCategory<T extends category_Put, R extends category_Full>(category: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/categories/${category.id}`,
            category
        );
        return response.data;
    }

    async deleteCategory(categoryId: number): Promise<void> {
        await this.apiClient.delete(`/v3/catalog/categories/${categoryId}`);
    }
}
