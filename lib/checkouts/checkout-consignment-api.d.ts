import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CreateConsignmentRequest } from "../model/generated/checkouts.sf";
import { Checkout, UpdateConsignmentRequest } from "../model/generated/checkouts.v3";
export declare class CheckoutConsignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addConsignmentToCheckout<T extends CreateConsignmentRequest, R extends Checkout>(checkoutId: number, consignment: T): Promise<Data<R>>;
    updateCheckoutConsignment<T extends UpdateConsignmentRequest, R extends Checkout>(checkoutId: number, consignmentId: number, consignment: T): Promise<Data<R>>;
    deleteCheckoutConsignment(checkoutId: number, consignmentId: number): Promise<void>;
}
