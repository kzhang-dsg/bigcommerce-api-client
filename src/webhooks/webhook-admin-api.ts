import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    WebhookAdminInfo,
    WebhookAdminInfoBase,
} from "../model/generated/webhooks.v3";
import { WebhookAdminsQueryParams as WebhookAdminQueryParams } from "../model/query/webhook";
import { appendQueryString } from "../util";

export class WebhookAdminApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAdminInfo<
        Params extends WebhookAdminQueryParams,
        T extends WebhookAdminInfo
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/hooks/admin", params)
        );
        return response.data;
    }

    async upsertEmailNotifications<T extends WebhookAdminInfoBase>(
        emails?: T
    ): Promise<void> {
        const response = await this.apiClient.put("/v3/hooks/admin", emails);
        return response.data;
    }
}
