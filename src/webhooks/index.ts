import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import {
    webhook_Base,
    webhook_Full,
    webhook_Put,
} from "../model/generated/webhooks.v3";
import { WebhooksQueryParams } from "../model/query/webhook";
import { appendQueryString } from "../util";
import { WebhookAdminApi } from "./webhook-admin-api";
import { WebhookEventApi } from "./webhook-event-api";

export class WebhooksApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly webhookEvents = new WebhookEventApi(this.apiClient);
    readonly webhookAdmin = new WebhookAdminApi(this.apiClient);

    async createWebhook<T extends webhook_Base, R extends webhook_Full>(
        webhook: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post("/v3/hooks", webhook);
        return response.data;
    }

    async getWebhooks<
        Params extends WebhooksQueryParams,
        T extends webhook_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/hooks", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getWebhook<T extends webhook_Full>(
        webhookId: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(`/v3/hooks/${webhookId}`);
        return response.data;
    }

    async updateWebhook<T extends webhook_Put, R extends webhook_Full>(
        webhookId: number,
        webhook: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/hooks/${webhookId}`,
            webhook
        );
        return response.data;
    }

    async deleteWebhook<T extends webhook_Full>(
        webhookId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.delete(`/v3/hooks/${webhookId}`);
        return response.data;
    }
}
