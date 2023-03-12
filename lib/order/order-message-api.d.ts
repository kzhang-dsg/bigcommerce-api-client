import { ApiClient } from "../api-client";
import { orderMessages } from "../model/generated/orders.v2.oas2";
import { OrderMessagesQueryParams } from "../model/query/order";
export declare class OrderMessageApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getOrderMessages<Params extends OrderMessagesQueryParams, T extends orderMessages>(orderId: number, params?: Params, page?: number, limit?: number): Promise<T>;
}
