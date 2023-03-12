import { ApiClient } from "../api-client";
import { orderStatus_Base } from "../model/generated/orders.v2.oas2";
export declare class OrderStatusApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllOrderStatuses<T extends orderStatus_Base>(): Promise<T[]>;
    getOrderStatus<T extends orderStatus_Base>(statusId: number): Promise<T>;
}
