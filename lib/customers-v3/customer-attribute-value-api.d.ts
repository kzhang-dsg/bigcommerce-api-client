import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { attributeValue_Base, attributeValue_Full } from "../model/generated/customers.v3";
import { CustomersV3AttributeValuesQueryParams } from "../model/query/customer";
export declare class CustomerAttributeValueApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomerAttributeValues<Params extends CustomersV3AttributeValuesQueryParams, T extends attributeValue_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertCustomerAttributeValue<T extends attributeValue_Base, R extends attributeValue_Full>(customerAttributeValues: T[]): Promise<PaginatedData<R>>;
    deleteCustomerAttributeValue<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
