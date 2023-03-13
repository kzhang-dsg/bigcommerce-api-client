import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { AddressProperties, Checkout } from "../model/generated/checkouts.v3";
export declare class CheckoutBillingAddressApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addCheckoutBillingAddress<T extends AddressProperties, R extends Checkout>(checkoutId: number, address: T): Promise<Data<R>>;
    updateCheckoutBillingAddress<T extends AddressProperties, R extends Checkout>(checkoutId: number, addressId: number, address: T): Promise<Data<R>>;
}
