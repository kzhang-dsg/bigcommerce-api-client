import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data, PaginatedData } from "../model/common";
import { EmailTemplate, EmailTemplateUpdate } from "../model/generated/email_templates.v3";
export declare class EmailTemplatesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getEmailTemplates<Params extends ChannelIdQueryParams, T extends EmailTemplate>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getEmailTemplate<T extends EmailTemplate>(templateName: string): Promise<Data<T>>;
    updateEmailTemplate<T extends EmailTemplateUpdate, R extends EmailTemplate>(templateName: string, emailTemplate: T): Promise<Data<R>>;
    deleteEmailTemplate(templateName: string): Promise<void>;
}
