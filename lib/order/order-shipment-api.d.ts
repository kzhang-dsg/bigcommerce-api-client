import { ApiClient } from "../api-client";
import { orderCount, orderShipment, orderShipment_Post, orderShipment_Put } from "../model/generated/orders.v2.oas2";
export declare class OrderShipmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getOrderShipments<T extends orderShipment>(orderId: number, page?: number, limit?: number): Promise<T[]>;
    createOrderShipment<T extends orderShipment_Post, R extends orderShipment>(orderId: number, orderShipment: T): Promise<R>;
    deleteOrderShipments(orderId: number): Promise<void>;
    getOrderShipmentsCount<T extends orderCount>(orderId: number): Promise<T[]>;
    getOrderShipment<T extends orderShipment>(orderId: number, orderShipmentId: number): Promise<T>;
    updateOrderShipment<T extends orderShipment_Put, R extends orderShipment>(orderId: number, orderShipmentId: number, orderShipment: T): Promise<R>;
    deleteOrderShipment(orderId: number, orderShipmentId: number): Promise<void>;
}
