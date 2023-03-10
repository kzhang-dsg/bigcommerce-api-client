import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { customer_Full, customer_Post, customer_Put } from "../model/generated/customers.v3";
import { CustomersV3QueryParams } from "../model/query/customer";
export declare class CustomersV3Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomers<Params extends CustomersV3QueryParams, T extends customer_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCustomer<T extends customer_Post, R extends customer_Full>(customer: T): Promise<Data<R>>;
    deleteCustomers(): Promise<void>;
    getCustomer<T extends customer_Full, Params extends FieldAwareQueryParams>(customerId: number, params?: Params): Promise<Data<T>>;
    updateCustomer<T extends customer_Put, R extends customer_Full>(customerId: number, customer: T): Promise<Data<R>>;
    deleteCustomer(customerId: number): Promise<void>;
}
