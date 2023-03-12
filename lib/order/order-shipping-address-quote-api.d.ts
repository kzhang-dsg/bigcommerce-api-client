import { ApiClient } from "../api-client";
import { shippingQuotes_Base } from "../model/generated/orders.v2.oas2";
export declare class OrderShippingAddressQuoteApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getOrderShippingQuotes<T extends shippingQuotes_Base>(orderId: number, orderShippingAddressId: number): Promise<T>;
}
