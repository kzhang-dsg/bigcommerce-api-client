import { ApiClient } from "../api-client";
import {
    ConnectionCredentials,
    ConnectionStatus,
} from "../model/tax-provider-connection";

export class TaxProviderConnectionApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getConnectionStatus<T extends ConnectionStatus>(
        providerId: string
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v3/tax/providers/${providerId}/connection`
        );
        return response.data;
    }

    async deleteConnection(providerId: string): Promise<void> {
        await this.apiClient.delete(
            `/v3/tax/providers/${providerId}/connection`
        );
    }

    async updateConnection<
        T extends ConnectionCredentials,
        R extends ConnectionStatus
    >(providerId: string, connectionCredentials: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v3/tax/providers/${providerId}/connection`,
            connectionCredentials
        );

        return response.data;
    }
}
