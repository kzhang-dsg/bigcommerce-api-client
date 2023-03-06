import { ApiClient } from "../api-client";
import { SimpleCategoryTree, CategoryTreesQueryParams, DeleteCategoryTreesQueryParams, GetCategoryTreeQueryParams, NestedCategoryTree } from "../model/catalog";
import { Data, PaginatedData } from "../model/common";
export declare class CategoryTreeApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategoryTrees<Params extends CategoryTreesQueryParams, T extends SimpleCategoryTree>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertCategoryTrees<T extends SimpleCategoryTree>(categoryTrees: T[]): Promise<Data<T>>;
    deleteCategoryTrees<Params extends DeleteCategoryTreesQueryParams>(params?: Params): Promise<void>;
    getCategoryTree<T extends NestedCategoryTree, Params extends GetCategoryTreeQueryParams>(treeId: number, params?: Params): Promise<Data<T>>;
}
