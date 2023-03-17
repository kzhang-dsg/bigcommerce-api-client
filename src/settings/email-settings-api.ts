import { ApiClient } from "../api-client";
import { ChannelIdQueryParams, Data } from "../model/common";
import { EnabledTransactionalEmails } from "../model/generated/settings.v3";
import { appendQueryString } from "../util";

export class EmailSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getTransactionalEmailSettings<
        Params extends ChannelIdQueryParams,
        T extends EnabledTransactionalEmails
    >(params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/settings/email-statuses`, params)
        );
        return response.data;
    }

    async updateTransactionalEmailSettings<
        Params extends ChannelIdQueryParams,
        T extends EnabledTransactionalEmails
    >(emailSettings: T, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/settings/email-statuses`, params),
            emailSettings
        );
        return response.data;
    }
}
