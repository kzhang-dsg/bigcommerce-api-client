import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import {
    customerAddress_Base,
    customerAddress_Full,
} from "../model/generated/customers.v2";

export class CustomerAddressApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomerAddresses<T extends customerAddress_Full>(
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

    async createCustomerAddress<
        T extends customerAddress_Base,
        R extends customerAddress_Full
    >(customerId: number, customerAddress: T): Promise<R> {
        const response = await this.apiClient.post(
            `/v2/customers/${customerId}/addresses`,
            customerAddress
        );
        return response.data;
    }

    async deleteCustomerAddresses(customerId: number): Promise<void> {
        await this.apiClient.delete(`/v2/customers/${customerId}/addresses`);
    }

    async getCustomerAddress<T extends customerAddress_Full>(
        customerId: number,
        customerAddressId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/customers/${customerId}/addresses/${customerAddressId}`
        );
        return response.data;
    }

    async updateCustomerAddress<
        T extends customerAddress_Base,
        R extends customerAddress_Full
    >(
        customerId: number,
        customerAddressId: number,
        customerAddress: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/customers/${customerId}/addresses/${customerAddressId}`,
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
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/customers/${customerId}/addresses/count`
        );
        return response.data;
    }
}
