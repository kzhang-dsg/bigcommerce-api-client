import { ApiClient } from "../api-client";
import { ConnectionCredentials, ConnectionStatus } from "../model/tax-provider-connection";
export declare class TaxProviderConnectionApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getConnectionStatus<T extends ConnectionStatus>(providerId: string): Promise<T>;
    deleteConnection(providerId: string): Promise<void>;
    updateConnection<T extends ConnectionCredentials, R extends ConnectionStatus>(providerId: string, connectionCredentials: T): Promise<R>;
}
