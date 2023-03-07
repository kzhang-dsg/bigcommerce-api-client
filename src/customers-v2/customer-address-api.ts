import { ApiClient } from "../api-client";
import { CustomerAddress } from "../model/customer";
import { Count } from "../model/common";

export class CustomerAddressApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomerAddresses<T extends CustomerAddress>(
        customerId: number,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/customers/${customerId}/addresses`,
            page,
            limit
        );
        return response.data;
    }

    async createCustomerAddress<T extends CustomerAddress>(
        customerId: number,
        customerAddress: T
    ): Promise<T> {
        const response = await this.apiClient.post(
            `/v2/customers/${customerId}/addresses`,
            customerAddress
        );
        return response.data;
    }

    async deleteCustomerAddresses(customerId: number): Promise<void> {
        await this.apiClient.delete(`/v2/customers/${customerId}/addresses`);
    }

    async getCustomerAddress<T extends CustomerAddress>(
        customerId: number,
        customerAddressId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/customers/${customerId}/addresses/${customerAddressId}`
        );
        return response.data;
    }

    async updateCustomerAddress<T extends CustomerAddress>(
        customerId: number,
        customerAddress: T
    ): Promise<T> {
        const response = await this.apiClient.put(
            `/v2/customers/${customerId}/addresses/${customerAddress.id}`,
            customerAddress
        );
        return response.data;
    }

    async deleteCustomerAddress(
        customerId: number,
        customerAddressId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v2/customers/${customerId}/addresses/${customerAddressId}`
        );
    }

    async getCustomerAddressesCount<T extends Count>(
        customerId: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/customers/${customerId}/addresses/count`
        );
        return response.data;
    }
}
