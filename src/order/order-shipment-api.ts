import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import {
    orderCount,
    orderShipment,
    orderShipment_Post,
    orderShipment_Put,
} from "../model/generated/orders.v2.oas2";

export class OrderShipmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getOrderShipments<T extends orderShipment>(
        orderId: number,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/shipments`,
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createOrderShipment<
        T extends orderShipment_Post,
        R extends orderShipment
    >(orderId: number, orderShipment: T): Promise<R> {
        const response = await this.apiClient.post(
            `/v2/orders/${orderId}/shipments`,
            orderShipment
        );
        return response.data;
    }

    async deleteOrderShipments(orderId: number): Promise<void> {
        await this.apiClient.delete(`/v2/orders/${orderId}/shipments`);
    }

    async getOrderShipmentsCount<T extends orderCount>(
        orderId: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/shipments/count`
        );
        return response.data;
    }

    async getOrderShipment<T extends orderShipment>(
        orderId: number,
        orderShipmentId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/shipments/${orderShipmentId}`
        );
        return response.data;
    }

    async updateOrderShipment<
        T extends orderShipment_Put,
        R extends orderShipment
    >(orderId: number, orderShipmentId: number, orderShipment: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/orders/${orderId}/shipments/${orderShipmentId}`,
            orderShipment
        );
        return response.data;
    }

    async deleteOrderShipment(
        orderId: number,
        orderShipmentId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v2/orders/${orderId}/shipments/${orderShipmentId}`
        );
    }
}
