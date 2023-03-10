import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { address_Full, address_Post, address_Put } from "../model/generated/customers.v3";
import { CustomersV3AddressesQueryParams } from "../model/query/customer";
export declare class CustomerAddressApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCustomerAddresses<Params extends CustomersV3AddressesQueryParams, T extends address_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCustomerAddress<T extends address_Post, R extends address_Full>(customerAddresses: T[]): Promise<PaginatedData<R>>;
    updateCustomerAddress<T extends address_Put, R extends address_Full>(customerAddresses: T[]): Promise<PaginatedData<R>>;
    deleteCustomerAddress<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
