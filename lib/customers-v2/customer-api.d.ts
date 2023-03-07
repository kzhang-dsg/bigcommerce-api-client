import { ApiClient } from "../api-client";
import { Customer, CustomersQueryParams } from "../model/customer";
import { Count } from "../model/common";
export declare class CustomerApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomers<Params extends CustomersQueryParams, T extends Customer>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createCustomer<T extends Customer>(customer: T): Promise<T>;
    deleteCustomers(): Promise<void>;
    getCustomer<T extends Customer>(customerId: number): Promise<T>;
    updateCustomer<T extends Customer>(customer: T): Promise<T>;
    updatePassword<T extends Customer>(customerId: number, newPassword: string, confirmPassword?: string): Promise<T>;
    forcePasswordResets<T extends Customer>(customerId: number): Promise<T>;
    deleteCustomer(customerId: number): Promise<void>;
    getCustomersCount<T extends Count>(): Promise<T[]>;
}
