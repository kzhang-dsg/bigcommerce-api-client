import { ApiClient } from "../api-client";
import { orderShippingAddress, shippingAddress_Base } from "../model/generated/orders.v2.oas2";
export declare class OrderShippingAddressApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getOrderShippingAddresses<T extends orderShippingAddress>(orderId: number, page?: number, limit?: number): Promise<T[]>;
    getOrderShippingAddress<T extends orderShippingAddress>(orderId: number, orderShippingAddressId: number): Promise<T>;
    updateOrderShippingAddress<T extends shippingAddress_Base, R extends orderShippingAddress>(orderId: number, orderShippingAddressId: number, orderShippingAddress: T): Promise<R>;
}
