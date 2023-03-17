import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data, PaginatedData } from "../model/common";
import {
    AbandondedCartEmail,
    AbandondedCartEmailPayload,
    Template,
} from "../model/generated/abandoned_cart_emails.v3";
import { appendQueryString } from "../util";
import { EmailTemplateSettingsApi } from "./email-template-settings-api";

export class AbandonedCartEmailsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly templateSettings = new EmailTemplateSettingsApi(this.apiClient);

    async getAllEmailTemplates<
        Params extends ChannelIdQueryParams,
        T extends AbandondedCartEmail
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/marketing/abandoned-cart-emails", params),
            page,
            limit
        );
        return response.data;
    }

    async createEmailTemplate<
        Params extends ChannelIdQueryParams,
        T extends AbandondedCartEmailPayload,
        R extends AbandondedCartEmail
    >(emailTemplate: T, params?: Params): Promise<Data<R>> {
        const response = await this.apiClient.post(
            appendQueryString("/v3/marketing/abandoned-cart-emails", params),
            emailTemplate
        );
        return response.data;
    }

    async getEmailTemplate<T extends AbandondedCartEmail>(
        emailTemplateId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/marketing/abandoned-cart-emails/${emailTemplateId}`
        );
        return response.data;
    }

    async updateEmailTemplate<
        T extends AbandondedCartEmailPayload,
        R extends AbandondedCartEmail
    >(emailTemplateId: number, emailTemplate: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/marketing/abandoned-cart-emails/${emailTemplateId}`,
            emailTemplate
        );
        return response.data;
    }

    async deleteEmailTemplate(emailTemplateId: number): Promise<void> {
        await this.apiClient.delete(
            `/v3/marketing/abandoned-cart-emails/${emailTemplateId}`
        );
    }

    async getDefaultEmailTemplate<T extends Template>(): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/marketing/abandoned-cart-emails/default`
        );
        return response.data;
    }
}
