import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { CustomerSettingsObject } from "../model/generated/customers.v3";
export declare class CustomerSettingsChannelApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomerSettingsPerChannel<T extends CustomerSettingsObject>(channelId: number): Promise<T>;
    updateCustomerSettingsPerChannel<T extends CustomerSettingsObject>(channelId: number, customerSettingsChannel: T): Promise<PaginatedData<T>>;
}
