import { ApiClient } from "../api-client";
import { orderProducts } from "../model/generated/orders.v2.oas2";
export declare class OrderProductApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    listOrderProducts<T extends orderProducts>(orderId: number, page?: number, limit?: number): Promise<T[]>;
    getOrderProduct<T extends orderProducts>(orderId: number, orderProductId: number): Promise<T>;
}
