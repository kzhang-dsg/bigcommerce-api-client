import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { webhook_Base, webhook_Full } from "../model/generated/webhooks.v3";
import { WebhooksQueryParams } from "../model/query/webhook";
import { WebhookAdminApi } from "./webhook-admin-api";
import { WebhookEventApi } from "./webhook-event-api";
export declare class WebhooksApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly webhookEvents: WebhookEventApi;
    readonly webhookAdmin: WebhookAdminApi;
    createWebhook<T extends webhook_Base, R extends webhook_Full>(webhook: T): Promise<Data<R>>;
    getWebhooks<Params extends WebhooksQueryParams, T extends webhook_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getWebhook<T extends webhook_Full>(webhookId: number): Promise<PaginatedData<T>>;
    updateWebhook<T extends webhook_Base, R extends webhook_Full>(webhookId: number, webhook: T): Promise<Data<R>>;
    deleteWebhook<T extends webhook_Full>(webhookId: number): Promise<Data<T>>;
}
