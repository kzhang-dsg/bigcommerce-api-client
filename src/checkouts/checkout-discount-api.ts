import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Checkout, DiscountRequest } from "../model/generated/checkouts.v3";

export class CheckoutDiscountApi {
    constructor(private readonly apiClient: ApiClient) {}

    async addDiscountToCheckout<T extends DiscountRequest, R extends Checkout>(
        checkoutId: number,
        discount: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/checkouts/${checkoutId}/discounts`,
            discount
        );
        return response.data;
    }
}
