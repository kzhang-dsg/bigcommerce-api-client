import { ApiClient } from "../api-client";
import { ProductCategoryAssignment, ProductCategoryAssignmentsQueryParams } from "../model/catalog";
import { PaginatedData } from "../model/common";
export declare class ProductCategoryAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategoryAssignments<Params extends ProductCategoryAssignmentsQueryParams, T extends ProductCategoryAssignment>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCategoryAssignments<T extends ProductCategoryAssignment>(categoryAssignments: T[]): Promise<void>;
    deleteCategoryAssignments<Params extends ProductCategoryAssignmentsQueryParams>(params: Params): Promise<void>;
}
