import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { HistoryEvent } from "../model/generated/webhooks.v3";
import { WebhookEventsQueryParams } from "../model/query/webhook";
export declare class WebhookEventApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getEvents<Params extends WebhookEventsQueryParams, T extends HistoryEvent>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
}
