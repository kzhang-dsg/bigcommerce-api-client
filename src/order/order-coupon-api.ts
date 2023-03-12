import { ApiClient } from "../api-client";
import { orderCoupons_Base } from "../model/generated/orders.v2.oas2";

export class OrderCouponApi {
    constructor(private readonly apiClient: ApiClient) {}

    async listOrderCoupons<T extends orderCoupons_Base>(
        orderId: number,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/coupons`,
            page,
            limit
        );
        return response.data;
    }
}
