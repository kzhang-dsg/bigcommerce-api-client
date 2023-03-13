import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Checkout, Checkout_Put } from "../model/generated/checkouts.v3";
import { CheckoutBillingAddressApi } from "./checkout-billing-address-api";
import { CheckoutConsignmentApi } from "./checkout-consignment-api";
import { CheckoutDiscountApi } from "./checkout-discount-api";
import { CheckoutOrderApi } from "./checkout-order-api";
import { CheckoutSettingsApi } from "./checkout-settings-api";
import { CheckoutTokenApi } from "./checkout-token-api";
export declare class CheckoutsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly checkoutBillingAddress: CheckoutBillingAddressApi;
    readonly checkoutConsignments: CheckoutConsignmentApi;
    readonly checkoutDiscounts: CheckoutDiscountApi;
    readonly checkoutOrders: CheckoutOrderApi;
    readonly checkoutSettings: CheckoutSettingsApi;
    readonly checkoutToken: CheckoutTokenApi;
    getCheckout<T extends Checkout>(checkoutId: number): Promise<Data<T>>;
    updateCustomerMessages<T extends Checkout_Put, R extends Checkout>(checkoutId: number, customerMessages: T): Promise<Data<R>>;
}
