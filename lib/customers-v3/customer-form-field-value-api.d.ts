import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { formFieldValue_Full } from "../model/generated/customers.v3";
import { CustomersV3FormFieldValuesQueryParams } from "../model/query/customer";
export declare class CustomerFormFieldValueApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomerFormFieldValues<Params extends CustomersV3FormFieldValuesQueryParams, T extends formFieldValue_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertCustomerFormFieldValue<T extends formFieldValue_Full>(customerFormFieldValues: T[]): Promise<PaginatedData<T>>;
}
