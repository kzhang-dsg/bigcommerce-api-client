import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Limit, PaginatedData } from "../model/common";
import {
    AnalyticsProvider,
    AnalyticsProviderPut,
} from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class AnalyticsSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllAnalyticsProviders<
        Params extends ChannelIdQueryParams,
        T extends AnalyticsProvider
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/analytics`, params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getAnalyticsProvider<T extends AnalyticsProvider>(
        analyticsProviderId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/settings/analytics/${analyticsProviderId}`
        );
        return response.data;
    }

    async updateAnalyticsProvider<
        Params extends ChannelIdQueryParams,
        T extends AnalyticsProviderPut,
        R extends AnalyticsProvider
    >(
        analyticsProviderId: number,
        analyticsProvider: T,
        params?: Params
    ): Promise<R> {
        const response = await this.apiClient.put(
            appendQueryString(
                `/v3/settings/analytics/${analyticsProviderId}`,
                params
            ),
            analyticsProvider
        );
        return response.data;
    }
}
