import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { themeRegion } from "../model/generated/widgets.v3";
export declare class RegionApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getThemeRegions<T extends themeRegion>(templateFile: string, page?: number, limit?: number): Promise<PaginatedData<T>>;
}
