import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { CategoryNode, Tree } from "../model/generated/catalog.v3";
import { CategoryTreesQueryParams, DeleteCategoryTreesQueryParams, GetCategoryTreeQueryParams } from "../model/query/catalog";
export declare class CategoryTreeApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategoryTrees<Params extends CategoryTreesQueryParams, T extends Tree>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertCategoryTrees<T extends Tree>(categoryTrees: T[]): Promise<Data<T>>;
    deleteCategoryTrees<Params extends DeleteCategoryTreesQueryParams>(params?: Params): Promise<void>;
    getCategoryTree<T extends CategoryNode, Params extends GetCategoryTreeQueryParams>(treeId: number, params?: Params): Promise<Data<T>>;
}
