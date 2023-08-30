import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import {
    widget_Full,
    widget_Post,
    widget_Put,
} from "../model/generated/widgets.v3";
import { WidgetsQueryParams } from "../model/query/widget";
import { appendQueryString } from "../util";

export class WidgetApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createWidget<T extends widget_Post, R extends widget_Full>(
        widget: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/content/widgets",
            widget
        );
        return response.data;
    }

    async getAllWidgets<
        Params extends WidgetsQueryParams,
        T extends widget_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/content/widgets", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getWidget<T extends widget_Full>(
        widgetUuid: string
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/content/widgets/${widgetUuid}`
        );
        return response.data;
    }

    async updateWidget<T extends widget_Put, R extends widget_Full>(
        widgetUuid: string,
        widget: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/content/widgets/${widgetUuid}`,
            widget
        );
        return response.data;
    }

    async deleteWidget(widgetUuid: string): Promise<void> {
        await this.apiClient.delete(`/v3/content/widgets/${widgetUuid}`);
    }
}
