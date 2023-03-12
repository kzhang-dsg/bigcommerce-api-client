import { ApiClient } from "../api-client";
import { orderCoupons_Base } from "../model/generated/orders.v2.oas2";
export declare class OrderCouponApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    listOrderCoupons<T extends orderCoupons_Base>(orderId: number, page?: number, limit?: number): Promise<T[]>;
}
