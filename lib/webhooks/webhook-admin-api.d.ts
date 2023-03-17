import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { WebhookAdminInfo, WebhookAdminInfoBase } from "../model/generated/webhooks.v3";
import { WebhookAdminsQueryParams as WebhookAdminQueryParams } from "../model/query/webhook";
export declare class WebhookAdminApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAdminInfo<Params extends WebhookAdminQueryParams, T extends WebhookAdminInfo>(params?: Params): Promise<Data<T>>;
    upsertEmailNotifications<T extends WebhookAdminInfoBase>(emails?: T): Promise<void>;
}
