import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { attribute_Full, attribute_Post, attribute_Put } from "../model/generated/customers.v3";
import { CustomersV3AttributesQueryParams } from "../model/query/customer";
export declare class CustomerAttributeApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomerAttributes<Params extends CustomersV3AttributesQueryParams, T extends attribute_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCustomerAttribute<T extends attribute_Post, R extends attribute_Full>(customerAttribute: T): Promise<PaginatedData<R>>;
    updateCustomerAttribute<T extends attribute_Put, R extends attribute_Full>(customerAttribute: T): Promise<PaginatedData<R>>;
    deleteCustomerAttribute<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
