import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import { customerGroup_Full, customerGroup_Post } from "../model/generated/customers.v2";
import { CustomerV2GroupsQueryParams } from "../model/query/customer";
export declare class CustomerGroupApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomerGroups<Params extends CustomerV2GroupsQueryParams, T extends customerGroup_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createCustomerGroup<T extends customerGroup_Post, R extends customerGroup_Full>(customerGroup: T): Promise<R>;
    deleteCustomerGroups(): Promise<void>;
    getCustomerGroup<T extends customerGroup_Full>(customerGroupId: number): Promise<T>;
    updateCustomerGroup<T extends customerGroup_Post, R extends customerGroup_Full>(customerGroupId: number, customerGroup: T): Promise<R>;
    deleteCustomerGroup(customerGroupId: number): Promise<void>;
    getCustomerGroupsCount<T extends Count>(): Promise<T>;
}
