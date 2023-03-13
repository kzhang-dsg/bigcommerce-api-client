import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Checkout, Checkout_Put } from "../model/generated/checkouts.v3";
import { CheckoutBillingAddressApi } from "./checkout-billing-address-api";
import { CheckoutConsignmentApi } from "./checkout-consignment-api";
import { CheckoutDiscountApi } from "./checkout-discount-api";
import { CheckoutOrderApi } from "./checkout-order-api";
import { CheckoutSettingsApi } from "./checkout-settings-api";
import { CheckoutTokenApi } from "./checkout-token-api";

export class CheckoutsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly checkoutBillingAddress = new CheckoutBillingAddressApi(
        this.apiClient
    );
    readonly checkoutConsignments = new CheckoutConsignmentApi(this.apiClient);
    readonly checkoutDiscounts = new CheckoutDiscountApi(this.apiClient);
    readonly checkoutOrders = new CheckoutOrderApi(this.apiClient);
    readonly checkoutSettings = new CheckoutSettingsApi(this.apiClient);
    readonly checkoutToken = new CheckoutTokenApi(this.apiClient);

    async getCheckout<T extends Checkout>(
        checkoutId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/checkouts/${checkoutId}`
        );
        return response.data;
    }

    async updateCustomerMessages<T extends Checkout_Put, R extends Checkout>(
        checkoutId: number,
        customerMessages: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/checkouts/${checkoutId}`,
            customerMessages
        );

        return response.data;
    }
}
