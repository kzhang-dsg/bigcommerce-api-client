import { ApiClient } from "../api-client";
import { ProductChannelAssignmentsQueryParams } from "../model/query/catalog";
import { PaginatedData } from "../model/common";
import { ExtendedProductChannelAssignment } from "../model/extended";
export declare class ProductChannelAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllChannelAssignments<Params extends ProductChannelAssignmentsQueryParams, T extends ExtendedProductChannelAssignment>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createChannelAssignments<T extends ExtendedProductChannelAssignment>(channelAssignments: T[]): Promise<void>;
    deleteChannelAssignments<Params extends ProductChannelAssignmentsQueryParams>(params: Params): Promise<void>;
}
