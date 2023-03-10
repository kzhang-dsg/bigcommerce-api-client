import { ApiClient } from "../api-client";
import { count_Full, customerAddress_Base, customerAddress_Full } from "../model/generated/customers.v2";
export declare class CustomerAddressApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomerAddresses<T extends customerAddress_Full>(customerId: number, page?: number, limit?: number): Promise<T[]>;
    createCustomerAddress<T extends customerAddress_Base, R extends customerAddress_Full>(customerId: number, customerAddress: T): Promise<customerAddress_Full>;
    deleteCustomerAddresses(customerId: number): Promise<void>;
    getCustomerAddress<T extends customerAddress_Full>(customerId: number, customerAddressId: number): Promise<T>;
    updateCustomerAddress<T extends customerAddress_Base, R extends customerAddress_Full>(customerId: number, customerAddressId: number, customerAddress: T): Promise<R>;
    deleteCustomerAddress(customerId: number, customerAddressId: number): Promise<void>;
    getCustomerAddressesCount<T extends count_Full>(customerId: number): Promise<T[]>;
}
