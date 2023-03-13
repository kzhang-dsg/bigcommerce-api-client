import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Order } from "../model/generated/checkouts.v3";
export declare class CheckoutOrderApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createOrder<T extends Order>(checkoutId: number): Promise<Data<T>>;
}
