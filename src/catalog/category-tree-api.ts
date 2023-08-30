import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import { CategoryNode, Tree } from "../model/generated/catalog.v3";
import {
    CategoryTreesQueryParams,
    DeleteCategoryTreesQueryParams,
    GetCategoryTreeQueryParams,
} from "../model/query/catalog";
import { appendQueryString } from "../util";

export class CategoryTreeApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCategoryTrees<
        Params extends CategoryTreesQueryParams,
        T extends Tree
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/trees`, params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async upsertCategoryTrees<T extends Tree>(
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
        T extends CategoryNode,
        Params extends GetCategoryTreeQueryParams
    >(treeId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/trees/${treeId}/categories`, params)
        );
        return response.data;
    }
}
