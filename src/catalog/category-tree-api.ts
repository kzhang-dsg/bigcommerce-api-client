import { ApiClient } from "../api-client";
import {
    SimpleCategoryTree,
    CategoryTreesQueryParams,
    DeleteCategoryTreesQueryParams,
    GetCategoryTreeQueryParams,
    NestedCategoryTree,
} from "../model/catalog";
import { Data, PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class CategoryTreeApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCategoryTrees<
        Params extends CategoryTreesQueryParams,
        T extends SimpleCategoryTree
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/trees`, params),
            page,
            limit
        );
        return response.data;
    }

    async upsertCategoryTrees<T extends SimpleCategoryTree>(
        categoryTrees: T[]
    ): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/trees`,
            categoryTrees
        );
        return response.data;
    }

    async deleteCategoryTrees<Params extends DeleteCategoryTreesQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString(`/v3/catalog/trees`, params)
        );
    }

    async getCategoryTree<
        T extends NestedCategoryTree,
        Params extends GetCategoryTreeQueryParams
    >(treeId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/trees/${treeId}/categories`, params)
        );
        return response.data;
    }
}
