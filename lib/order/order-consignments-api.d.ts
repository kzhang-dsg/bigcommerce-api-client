import { ApiClient } from "../api-client";
import { orderConsignment_Get, shippingQuotes_Base } from "../model/generated/orders.v2.oas2";
export declare class OrderConsignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getOrderConsignments<T extends orderConsignment_Get>(orderId: number): Promise<T>;
    getOrderConsignmentShippingQuotes<T extends shippingQuotes_Base>(orderId: number, shippingConsignmentId: number): Promise<T>;
}
