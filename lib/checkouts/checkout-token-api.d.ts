import { ApiClient } from "../api-client";
import { CheckoutToken, CheckoutTokenRequest } from "../model/generated/checkouts.v3";
export declare class CheckoutTokenApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createCheckoutToken<T extends CheckoutTokenRequest, R extends CheckoutToken>(checkoutId: number, checkoutTokenRequest: T): Promise<R>;
}
