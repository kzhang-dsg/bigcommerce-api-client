import { ApiClient } from "../api-client";
import {
    ProductChannelAssignment,
    ProductChannelAssignmentsQueryParams,
} from "../model/catalog";
import { PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class ProductChannelAssignmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllChannelAssignments<
        Params extends ProductChannelAssignmentsQueryParams,
        T extends ProductChannelAssignment
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/catalog/products/channel-assignments`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async createChannelAssignments<T extends ProductChannelAssignment>(
        channelAssignments: T[]
    ): Promise<void> {
        await this.apiClient.post(
            `/v3/catalog/products/channel-assignments`,
            channelAssignments
        );
    }

    async deleteChannelAssignments<
        Params extends ProductChannelAssignmentsQueryParams
    >(params: Params): Promise<void> {
        await this.apiClient.delete(
            appendQueryString(
                `/v3/catalog/products/channel-assignments`,
                params
            )
        );
    }
}
