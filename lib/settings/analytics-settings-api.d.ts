import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, PaginatedData } from "../model/common";
import { AnalyticsProvider, AnalyticsProviderPut } from "../model/generated/settings.v3";
export declare class AnalyticsSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllAnalyticsProviders<Params extends ChannelIdQueryParams, T extends AnalyticsProvider>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getAnalyticsProvider<T extends AnalyticsProvider>(analyticsProviderId: number): Promise<T>;
    updateAnalyticsProvider<Params extends ChannelIdQueryParams, T extends AnalyticsProviderPut, R extends AnalyticsProvider>(analyticsProviderId: number, analyticsProvider: T, params?: Params): Promise<R>;
}
