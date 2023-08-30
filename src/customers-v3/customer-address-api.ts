import { ApiClient } from "../api-client";
import { IdInQueryParams, Limit, PaginatedData } from "../model/common";
import {
    address_Full,
    address_Post,
    address_Put,
} from "../model/generated/customers.v3";
import { CustomersV3AddressesQueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 10;

export class CustomerAddressApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomerAddresses<
        Params extends CustomersV3AddressesQueryParams,
        T extends address_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/customers/addresses", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createCustomerAddress<T extends address_Post, R extends address_Full>(
        customerAddresses: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < customerAddresses.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                "/v3/customers/addresses",
                customerAddresses.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async updateCustomerAddress<T extends address_Put, R extends address_Full>(
        customerAddresses: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < customerAddresses.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/customers/addresses",
                customerAddresses.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteCustomerAddress<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/customers/addresses", params)
        );
    }
}
