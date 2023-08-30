import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import {
    placement_Full,
    placement_Post,
    placement_Put,
} from "../model/generated/widgets.v3";
import { PlacementsQueryParams } from "../model/query/widget";
import { appendQueryString } from "../util";

export class PlacementApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createPlacement<T extends placement_Post, R extends placement_Full>(
        placement: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/content/placements",
            placement
        );
        return response.data;
    }

    async getAllPlacements<
        Params extends PlacementsQueryParams,
        T extends placement_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/content/placements", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getPlacement<T extends placement_Full>(
        placementUuid: string
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/content/placements/${placementUuid}`
        );
        return response.data;
    }

    async updatePlacement<T extends placement_Put, R extends placement_Full>(
        placementUuid: string,
        placement: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/content/placements/${placementUuid}`,
            placement
        );
        return response.data;
    }

    async deletePlacement(placementUuid: string): Promise<void> {
        await this.apiClient.delete(`/v3/content/placements/${placementUuid}`);
    }
}
