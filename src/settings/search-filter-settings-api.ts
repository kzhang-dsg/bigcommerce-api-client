import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import {
    AvailableFilter,
    ConfiguredFilter,
    ConfiguredFiltersOverride,
} from "../model/generated/settings.v3";
import { SearchFiltersQueryParams } from "../model/query/settings";
import { appendQueryString } from "../util";

export class SearchFilterSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getEnabledFilters<T extends ConfiguredFilter>(
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            "/v3/settings/search/filters",
            page,
            limit
        );
        return response.data;
    }

    async updateEnabledFilters<T extends ConfiguredFilter>(
        filters: T[]
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.put(
            "/v3/settings/search/filters",
            filters
        );
        return response.data;
    }

    async getAvailableFilters<
        Params extends SearchFiltersQueryParams,
        T extends AvailableFilter
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/settings/search/filters/available", params),
            page,
            limit
        );
        return response.data;
    }

    async getContextualFilters<
        Params extends SearchFiltersQueryParams,
        T extends ConfiguredFiltersOverride
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/settings/search/filters/contexts", params),
            page,
            limit
        );
        return response.data;
    }

    async upsertEnabledFilters<T extends ConfiguredFiltersOverride>(
        filters: T[]
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.put(
            "/v3/settings/search/filters/contexts",
            filters
        );
        return response.data;
    }
}
