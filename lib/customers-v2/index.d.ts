import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import { CustomersV2QueryParams, Customer } from "../model/customer";
import { CustomerAddressApi } from "./customer-address-api";
import { CustomerGroupApi } from "./customer-group-api";
import { CustomerPasswordApi } from "./customer-password-api";
export declare class CustomersV2Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly customerAddresses: CustomerAddressApi;
    readonly customerGroups: CustomerGroupApi;
    readonly customerPasswords: CustomerPasswordApi;
    getAllCustomers<Params extends CustomersV2QueryParams, T extends Customer>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createCustomer<T extends Customer>(customer: T): Promise<T>;
    deleteCustomers(): Promise<void>;
    getCustomer<T extends Customer>(customerId: number): Promise<T>;
    updateCustomer<T extends Customer>(customer: T): Promise<T>;
    updatePassword<T extends Customer>(customerId: number, newPassword: string, confirmPassword?: string): Promise<T>;
    forcePasswordResets<T extends Customer>(customerId: number): Promise<T>;
    deleteCustomer(customerId: number): Promise<void>;
    getCustomersCount<T extends Count>(): Promise<T[]>;
}
