import { ApiClient } from "../api-client";
import { orderStatus_Base } from "../model/generated/orders.v2.oas2";

export class OrderStatusApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllOrderStatuses<T extends orderStatus_Base>(): Promise<T[]> {
        const response = await this.apiClient.get(`/v2/order_statuses`);
        return response.data;
    }

    async getOrderStatus<T extends orderStatus_Base>(
        statusId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/order_statuses/${statusId}`
        );
        return response.data;
    }
}
