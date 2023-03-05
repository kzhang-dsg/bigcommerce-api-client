import { ApiClient } from "../api-client";
import { Category, CategoriesQueryParams } from "../model/category";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class CategoryApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategories<Params extends CategoriesQueryParams, T extends Category>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCategory<T extends Category>(category: T): Promise<Data<T>>;
    deleteCategories<Params extends CategoriesQueryParams>(params?: Params): Promise<void>;
    getCategory<T extends Category, Params extends FieldAwareQueryParams>(categoryId: number, params?: Params): Promise<Data<T>>;
    updateCategory<T extends Category>(category: T): Promise<Data<T>>;
    deleteCategory(categoryId: number): Promise<void>;
}
