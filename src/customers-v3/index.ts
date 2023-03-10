import { ApiClient } from "../api-client";
import {
    Data,
    FieldAwareQueryParams,
    IdInQueryParams,
    PaginatedData,
} from "../model/common";
import {
    customer_Full,
    customer_Post,
    customer_Put,
} from "../model/generated/customers.v3";
import { CustomersV3QueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 10;

export class CustomersV3Api {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomers<
        Params extends CustomersV3QueryParams,
        T extends customer_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/customers", params),
            page,
            limit
        );
        return response.data;
    }

    async createCustomers<T extends customer_Post, R extends customer_Full>(
        customers: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < customers.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                "/v3/customers",
                customers.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async updateCustomers<T extends customer_Put, R extends customer_Full>(
        customers: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < customers.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/customers",
                customers.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteCustomers<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(appendQueryString("/v3/customers", params));
    }
}
