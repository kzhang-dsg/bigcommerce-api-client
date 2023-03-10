import { ApiClient } from "../api-client";
import { ProductCategoryAssignmentsQueryParams } from "../model/query/catalog";
import { PaginatedData } from "../model/common";
import { ExtendedProductCategoryAssignment } from "../model/extended";
export declare class ProductCategoryAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategoryAssignments<Params extends ProductCategoryAssignmentsQueryParams, T extends ExtendedProductCategoryAssignment>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCategoryAssignments<T extends ExtendedProductCategoryAssignment>(categoryAssignments: T[]): Promise<void>;
    deleteCategoryAssignments<Params extends ProductCategoryAssignmentsQueryParams>(params: Params): Promise<void>;
}
