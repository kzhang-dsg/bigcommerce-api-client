import { ApiClient } from "../api-client";
import { CustomerGroup, CustomerGroupsQueryParams } from "../model/customer";
import { Count } from "../model/common";
export declare class CustomerGroupApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomerGroups<Params extends CustomerGroupsQueryParams, T extends CustomerGroup>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createCustomerGroup<T extends CustomerGroup>(customerGroup: T): Promise<T>;
    deleteCustomerGroups(): Promise<void>;
    getCustomerGroup<T extends CustomerGroup>(customerGroupId: number): Promise<T>;
    updateCustomerGroup<T extends CustomerGroup>(customerGroup: T): Promise<T>;
    deleteCustomerGroup(customerGroupId: number): Promise<void>;
    getCustomerGroupsCount<T extends Count>(): Promise<T[]>;
}
