import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { ProductChannelAssignment } from "../model/generated/catalog.v3";
import { ProductChannelAssignmentsQueryParams } from "../model/query/catalog";
export declare class ProductChannelAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllChannelAssignments<Params extends ProductChannelAssignmentsQueryParams, T extends ProductChannelAssignment>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createChannelAssignments<T extends ProductChannelAssignment>(channelAssignments: T[]): Promise<void>;
    deleteChannelAssignments<Params extends ProductChannelAssignmentsQueryParams>(params: Params): Promise<void>;
}
