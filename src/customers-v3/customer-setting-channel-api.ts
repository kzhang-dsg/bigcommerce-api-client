import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { CustomerSettingsObject } from "../model/generated/customers.v3";

export class CustomerSettingsChannelApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomerSettingsPerChannel<T extends CustomerSettingsObject>(
        channelId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/customers/settings/channels/${channelId}`
        );
        return response.data;
    }

    async updateCustomerSettingsPerChannel<T extends CustomerSettingsObject>(
        channelId: number,
        customerSettingsChannel: T
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.put(
            `/v3/customers/settings/channels/${channelId}`,
            customerSettingsChannel
        );

        return response.data;
    }
}
