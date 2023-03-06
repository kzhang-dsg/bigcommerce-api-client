import { ApiClient } from "../api-client";
import { Category, CategoriesQueryParams, DeleteCategoriesBatchQueryParams } from "../model/catalog";
import { PaginatedData } from "../model/common";
export declare class CategoryBatchApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategories<Params extends CategoriesQueryParams, T extends Category>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCategories<T extends Category>(categories: T[]): Promise<PaginatedData<T>>;
    updateCategories<T extends Category>(categories: T[]): Promise<void>;
    deleteCategories<Params extends DeleteCategoriesBatchQueryParams>(params?: Params): Promise<PaginatedData<void>>;
}
