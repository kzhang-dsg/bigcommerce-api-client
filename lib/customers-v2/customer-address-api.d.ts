import { ApiClient } from "../api-client";
import { CustomerAddress } from "../model/customer";
import { Count } from "../model/common";
export declare class CustomerAddressApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomerAddresses<T extends CustomerAddress>(customerId: number, page?: number, limit?: number): Promise<T[]>;
    createCustomerAddress<T extends CustomerAddress>(customerId: number, customerAddress: T): Promise<T>;
    deleteCustomerAddresses(customerId: number): Promise<void>;
    getCustomerAddress<T extends CustomerAddress>(customerId: number, customerAddressId: number): Promise<T>;
    updateCustomerAddress<T extends CustomerAddress>(customerId: number, customerAddress: T): Promise<T>;
    deleteCustomerAddress(customerId: number, customerAddressId: number): Promise<void>;
    getCustomerAddressesCount<T extends Count>(customerId: number): Promise<T[]>;
}
