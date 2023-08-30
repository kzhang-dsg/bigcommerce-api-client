import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { Category, CreateCategories, UpdateCategories } from "../model/generated/catalog.v3";
import { CategoriesQueryParams, DeleteCategoriesBatchQueryParams } from "../model/query/catalog";
export declare class CategoryBatchApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategories<Params extends CategoriesQueryParams, T extends Category>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCategories<T extends CreateCategories, R extends Category>(categories: T): Promise<PaginatedData<R>>;
    updateCategories<T extends UpdateCategories>(categories: T): Promise<void>;
    deleteCategories<Params extends DeleteCategoriesBatchQueryParams>(params?: Params): Promise<void>;
}
