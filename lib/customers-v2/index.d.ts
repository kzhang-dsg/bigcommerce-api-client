import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import { customer_Base, customer_Full } from "../model/generated/customers.v2";
import { CustomersV2QueryParams } from "../model/query/customer";
import { CustomerAddressApi } from "./customer-address-api";
import { CustomerGroupApi } from "./customer-group-api";
import { CustomerPasswordApi } from "./customer-password-api";
export declare class CustomersV2Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly customerAddresses: CustomerAddressApi;
    readonly customerGroups: CustomerGroupApi;
    readonly customerPasswords: CustomerPasswordApi;
    getAllCustomers<Params extends CustomersV2QueryParams, T extends customer_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createCustomer<T extends customer_Base, R extends customer_Full>(customer: T): Promise<R>;
    deleteCustomers(): Promise<void>;
    getCustomer<T extends customer_Full>(customerId: number): Promise<T>;
    updateCustomer<T extends customer_Base, R extends customer_Full>(customerId: number, customer: T): Promise<R>;
    updatePassword<T extends customer_Full>(customerId: number, newPassword: string, confirmPassword?: string): Promise<T>;
    forcePasswordResets<T extends customer_Full>(customerId: number): Promise<T>;
    deleteCustomer(customerId: number): Promise<void>;
    getCustomersCount<T extends Count>(): Promise<T>;
}
