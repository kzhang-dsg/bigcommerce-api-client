import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { AddressProperties, Checkout } from "../model/generated/checkouts.v3";

export class CheckoutBillingAddressApi {
    constructor(private readonly apiClient: ApiClient) {}

    async addCheckoutBillingAddress<
        T extends AddressProperties,
        R extends Checkout
    >(checkoutId: number, address: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/checkouts/${checkoutId}/billing-address`,
            address
        );
        return response.data;
    }

    async updateCheckoutBillingAddress<
        T extends AddressProperties,
        R extends Checkout
    >(checkoutId: number, addressId: number, address: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/checkouts/${checkoutId}/billing-address/${addressId}`,
            address
        );
        return response.data;
    }
}
