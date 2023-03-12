import { ApiClient } from "../api-client";
import { shippingQuotes_Base } from "../model/generated/orders.v2.oas2";

export class OrderShippingAddressQuoteApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getOrderShippingQuotes<T extends shippingQuotes_Base>(
        orderId: number,
        orderShippingAddressId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/orders/${orderId}/shipping_addresses/${orderShippingAddressId}/shipping_quotes`
        );
        return response.data;
    }
}
