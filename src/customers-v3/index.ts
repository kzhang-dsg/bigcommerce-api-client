import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import {
    customer_Full,
    customer_Post,
    customer_Put,
} from "../model/generated/customers.v3";
import { CustomersV3QueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

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
            appendQueryString("/v3/catalog/customers", params),
            page,
            limit
        );
        return response.data;
    }

    async createCustomer<T extends customer_Post, R extends customer_Full>(
        customer: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/catalog/customers",
            customer
        );
        return response.data;
    }

    async deleteCustomers(): Promise<void> {
        await this.apiClient.delete("/v3/catalog/customers");
    }

    async getCustomer<
        T extends customer_Full,
        Params extends FieldAwareQueryParams
    >(customerId: number, params?: Params): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/customers/${customerId}`, params)
        );
        return response.data;
    }

    async updateCustomer<T extends customer_Put, R extends customer_Full>(
        customerId: number,
        customer: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/catalog/customers/${customerId}`,
            customer
        );
        return response.data;
    }

    async deleteCustomer(customerId: number): Promise<void> {
        await this.apiClient.delete(`/v3/catalog/customers/${customerId}`);
    }
}
