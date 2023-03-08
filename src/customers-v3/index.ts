import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { Customer, CustomersV3QueryParams } from "../model/customer";
import { appendQueryString } from "../util";

export class CustomersV3Api {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomers<
        Params extends CustomersV3QueryParams,
        T extends Customer
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

    async createCustomer<T extends Customer>(customer: T): Promise<Data<T>> {
        const response = await this.apiClient.post(
            "/v3/catalog/customers",
            customer
        );
        return response.data;
    }

    async deleteCustomers(): Promise<void> {
        await this.apiClient.delete("/v3/catalog/customers");
    }

    async getCustomer<T extends Customer, Params extends FieldAwareQueryParams>(
        customerId: number,
        params?: Params
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/customers/${customerId}`, params)
        );
        return response.data;
    }

    async updateCustomer<T extends Customer>(customer: T): Promise<Data<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/customers/${customer.id}`,
            customer
        );
        return response.data;
    }

    async deleteCustomer(customerId: number): Promise<void> {
        await this.apiClient.delete(`/v3/catalog/customers/${customerId}`);
    }
}
