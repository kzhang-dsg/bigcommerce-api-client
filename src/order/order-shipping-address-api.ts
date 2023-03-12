import { ApiClient } from "../api-client";
import {
    orderShippingAddress,
    shippingAddress_Base,
} from "../model/generated/orders.v2.oas2";

export class OrderShippingAddressApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getOrderShippingAddresses<T extends orderShippingAddress>(
        orderId: number,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/shipping_addresses`,
            page,
            limit
        );
        return response.data;
    }

    async getOrderShippingAddress<T extends orderShippingAddress>(
        orderId: number,
        orderShippingAddressId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/shipping_addresses/${orderShippingAddressId}`
        );
        return response.data;
    }

    async updateOrderShippingAddress<
        T extends shippingAddress_Base,
        R extends orderShippingAddress
    >(
        orderId: number,
        orderShippingAddressId: number,
        orderShippingAddress: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/orders/${orderId}/shippingAddresses/${orderShippingAddressId}`,
            orderShippingAddress
        );
        return response.data;
    }
}
