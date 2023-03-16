import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { AnalyticsProvider, AnalyticsProviderPut } from "../model/generated/settings.v3";
export declare class AnalyticsSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllAnalyticsProviders<T extends AnalyticsProvider>(channelId?: number, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getAnalyticsProvider<T extends AnalyticsProvider>(analyticsProviderId: number): Promise<T>;
    updateAnalyticsProvider<T extends AnalyticsProviderPut, R extends AnalyticsProvider>(analyticsProviderId: number, analyticsProvider: T, channelId?: number): Promise<R>;
}
