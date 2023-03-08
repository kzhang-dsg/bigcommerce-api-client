import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { Customer, CustomersV3QueryParams } from "../model/customer";
export declare class CustomersV3Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomers<Params extends CustomersV3QueryParams, T extends Customer>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCustomer<T extends Customer>(customer: T): Promise<Data<T>>;
    deleteCustomers(): Promise<void>;
    getCustomer<T extends Customer, Params extends FieldAwareQueryParams>(customerId: number, params?: Params): Promise<Data<T>>;
    updateCustomer<T extends Customer>(customer: T): Promise<Data<T>>;
    deleteCustomer(customerId: number): Promise<void>;
}
