import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { AvailableFilter, ConfiguredFilter, ConfiguredFiltersOverride } from "../model/generated/settings.v3";
import { SearchFiltersQueryParams } from "../model/query/settings";
export declare class SearchFilterSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getEnabledFilters<T extends ConfiguredFilter>(page?: number, limit?: number): Promise<PaginatedData<T>>;
    updateEnabledFilters<T extends ConfiguredFilter>(filters: T[]): Promise<PaginatedData<T>>;
    getAvailableFilters<Params extends SearchFiltersQueryParams, T extends AvailableFilter>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getContextualFilters<Params extends SearchFiltersQueryParams, T extends ConfiguredFiltersOverride>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertEnabledFilters<T extends ConfiguredFiltersOverride>(filters: T[]): Promise<PaginatedData<T>>;
}
