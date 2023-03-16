import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import {
    AnalyticsProvider,
    AnalyticsProviderPut,
} from "../model/generated/settings.v3";

export class AnalyticsSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllAnalyticsProviders<T extends AnalyticsProvider>(
        channelId?: number,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/analytics${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            page,
            limit
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
        T extends AnalyticsProviderPut,
        R extends AnalyticsProvider
    >(
        analyticsProviderId: number,
        analyticsProvider: T,
        channelId?: number
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v3/settings/analytics/${analyticsProviderId}${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            analyticsProvider
        );
        return response.data;
    }
}
