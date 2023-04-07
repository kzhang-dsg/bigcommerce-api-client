import { ApiClient } from "../api-client";
import { CategoriesQueryParams } from "../model/query/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { Category, category_Post, category_Put, category_Full } from "../model/generated/catalog.v3";
export declare class CategoryApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategories<Params extends CategoriesQueryParams, T extends Category>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCategory<T extends category_Post, R extends category_Full>(category: T): Promise<Data<R>>;
    deleteCategories<Params extends CategoriesQueryParams>(params?: Params): Promise<void>;
    getCategory<Params extends FieldAwareQueryParams, T extends category_Full>(categoryId: number, params?: Params): Promise<Data<T>>;
    updateCategory<T extends category_Put, R extends category_Full>(category: T): Promise<Data<R>>;
    deleteCategory(categoryId: number): Promise<void>;
}
