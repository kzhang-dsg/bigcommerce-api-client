import { ApiClient } from "../api-client";
import { ProductChannelAssignment, ProductChannelAssignmentsQueryParams } from "../model/catalog";
import { PaginatedData } from "../model/common";
export declare class ProductChannelAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllChannelAssignments<Params extends ProductChannelAssignmentsQueryParams, T extends ProductChannelAssignment>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createChannelAssignments<T extends ProductChannelAssignment>(channelAssignments: T[]): Promise<void>;
    deleteChannelAssignments<Params extends ProductChannelAssignmentsQueryParams>(params: Params): Promise<void>;
}
