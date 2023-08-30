import { ApiClient } from "../api-client";
import { Limit, PaginatedData } from "../model/common";
import { HistoryEvent } from "../model/generated/webhooks.v3";
import { WebhookEventsQueryParams } from "../model/query/webhook";
import { appendQueryString } from "../util";

export class WebhookEventApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getEvents<
        Params extends WebhookEventsQueryParams,
        T extends HistoryEvent
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/hooks/events", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }
}
