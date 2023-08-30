import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    Category,
    category_Full,
    category_Post,
    category_Put,
} from "../model/generated/catalog.v3";
import { CategoriesQueryParams } from "../model/query/catalog";
import { appendQueryString } from "../util";

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
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createCategory<T extends category_Post, R extends category_Full>(
        category: T
    ): Promise<Data<R>> {
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

    async getCategory<
        Params extends FieldAwareQueryParams,
        T extends category_Full
    >(categoryId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/categories/${categoryId}`, params),
            undefined
        );
        return response.data;
    }

    async updateCategory<T extends category_Put, R extends category_Full>(
        categoryId: number,
        category: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/categories/${categoryId}`,
            category
        );
        return response.data;
    }

    async deleteCategory(categoryId: number): Promise<void> {
        await this.apiClient.delete(`/v3/catalog/categories/${categoryId}`);
    }
}
