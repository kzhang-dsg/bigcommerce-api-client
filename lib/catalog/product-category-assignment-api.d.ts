import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { ProductCategoryAssignment } from "../model/generated/catalog.v3";
import { ProductCategoryAssignmentsQueryParams } from "../model/query/catalog";
export declare class ProductCategoryAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCategoryAssignments<Params extends ProductCategoryAssignmentsQueryParams, T extends ProductCategoryAssignment>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCategoryAssignments<T extends ProductCategoryAssignment>(categoryAssignments: T[]): Promise<void>;
    deleteCategoryAssignments<Params extends ProductCategoryAssignmentsQueryParams>(params: Params): Promise<void>;
}
