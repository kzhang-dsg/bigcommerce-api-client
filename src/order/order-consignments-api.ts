import { ApiClient } from "../api-client";
import {
    orderConsignment_Get,
    shippingQuotes_Base,
} from "../model/generated/orders.v2.oas2";

export class OrderConsignmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getOrderConsignments<T extends orderConsignment_Get>(
        orderId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/consignments`
        );
        return response.data;
    }

    async getOrderConsignmentShippingQuotes<T extends shippingQuotes_Base>(
        orderId: number,
        shippingConsignmentId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/consignments/shipping/${shippingConsignmentId}/shipping_quotes`
        );
        return response.data;
    }
}
