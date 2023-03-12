import { ApiClient } from "../api-client";
import { orderProducts } from "../model/generated/orders.v2.oas2";

export class OrderProductApi {
    constructor(private readonly apiClient: ApiClient) {}

    async listOrderProducts<T extends orderProducts>(
        orderId: number,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/products`,
            page,
            limit
        );
        return response.data;
    }

    async getOrderProduct<T extends orderProducts>(
        orderId: number,
        orderProductId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/products/${orderProductId}`
        );
        return response.data;
    }
}
