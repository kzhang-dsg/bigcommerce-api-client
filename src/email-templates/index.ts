import { ApiClient } from "../api-client";
import {
    ChannelIdQueryParams,
    Data,
    Limit,
    PaginatedData,
} from "../model/common";
import {
    EmailTemplate,
    EmailTemplateUpdate,
} from "../model/generated/email_templates.v3";
import { appendQueryString } from "../util";

export class EmailTemplatesApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getEmailTemplates<
        Params extends ChannelIdQueryParams,
        T extends EmailTemplate
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/marketing/email-templates", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getEmailTemplate<T extends EmailTemplate>(
        templateName: string
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/marketing/email-templates/${templateName}`
        );
        return response.data;
    }

    async updateEmailTemplate<
        T extends EmailTemplateUpdate,
        R extends EmailTemplate
    >(templateName: string, emailTemplate: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/marketing/email-templates/${templateName}`,
            emailTemplate
        );
        return response.data;
    }

    async deleteEmailTemplate(templateName: string): Promise<void> {
        await this.apiClient.delete(
            `/v3/marketing/email-templates/${templateName}`
        );
    }
}
