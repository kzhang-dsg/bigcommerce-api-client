import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { placement_Full, placement_Post, placement_Put } from "../model/generated/widgets.v3";
import { PlacementsQueryParams } from "../model/query/widget";
export declare class PlacementApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createPlacement<T extends placement_Post, R extends placement_Full>(placement: T): Promise<Data<R>>;
    getAllPlacements<Params extends PlacementsQueryParams, T extends placement_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getPlacement<T extends placement_Full>(placementUuid: string): Promise<PaginatedData<T>>;
    updatePlacement<T extends placement_Put, R extends placement_Full>(placementUuid: string, placement: T): Promise<Data<R>>;
    deletePlacement(placementUuid: string): Promise<void>;
}
