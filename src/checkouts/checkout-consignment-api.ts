import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { CreateConsignmentRequest } from "../model/generated/checkouts.sf";
import {
    Checkout,
    UpdateConsignmentRequest,
} from "../model/generated/checkouts.v3";

export class CheckoutConsignmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async addConsignmentToCheckout<
        T extends CreateConsignmentRequest,
        R extends Checkout
    >(checkoutId: number, consignment: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/checkouts/${checkoutId}/consignments`,
            consignment
        );
        return response.data;
    }

    async updateCheckoutConsignment<
        T extends UpdateConsignmentRequest,
        R extends Checkout
    >(
        checkoutId: number,
        consignmentId: number,
        consignment: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
            consignment
        );
        return response.data;
    }

    async deleteCheckoutConsignment(
        checkoutId: number,
        consignmentId: number
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/checkouts/${checkoutId}/consignments/${consignmentId}`
        );
    }
}
