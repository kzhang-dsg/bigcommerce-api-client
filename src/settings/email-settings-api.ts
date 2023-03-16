import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { EnabledTransactionalEmails } from "../model/generated/settings.v3";

export class EmailSettingsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getTransactionalEmailSettings<T extends EnabledTransactionalEmails>(
        channelId?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/settings/email-statuses${
                channelId ? "?channel_id=" + channelId : ""
            }`
        );
        return response.data;
    }

    async updateTransactionalEmailSettings<
        T extends EnabledTransactionalEmails
    >(emailSettings: T, channelId?: number): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/settings/email-statuses${
                channelId ? "?channel_id=" + channelId : ""
            }`,
            emailSettings
        );
        return response.data;
    }
}
