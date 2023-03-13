import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Checkout, DiscountRequest } from "../model/generated/checkouts.v3";
export declare class CheckoutDiscountApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addDiscountToCheckout<T extends DiscountRequest, R extends Checkout>(checkoutId: number, discount: T): Promise<Data<R>>;
}
