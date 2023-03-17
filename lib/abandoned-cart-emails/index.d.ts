import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data, PaginatedData } from "../model/common";
import { AbandondedCartEmail, AbandondedCartEmailPayload, Template } from "../model/generated/abandoned_cart_emails.v3";
import { EmailTemplateSettingsApi } from "./email-template-settings-api";
export declare class AbandonedCartEmailsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly templateSettings: EmailTemplateSettingsApi;
    getAllEmailTemplates<Params extends ChannelIdQueryParams, T extends AbandondedCartEmail>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createEmailTemplate<Params extends ChannelIdQueryParams, T extends AbandondedCartEmailPayload, R extends AbandondedCartEmail>(emailTemplate: T, params?: Params): Promise<Data<R>>;
    getEmailTemplate<T extends AbandondedCartEmail>(emailTemplateId: number): Promise<Data<T>>;
    updateEmailTemplate<T extends AbandondedCartEmailPayload, R extends AbandondedCartEmail>(emailTemplateId: number, emailTemplate: T): Promise<Data<R>>;
    deleteEmailTemplate(emailTemplateId: number): Promise<void>;
    getDefaultEmailTemplate<T extends Template>(): Promise<T>;
}
