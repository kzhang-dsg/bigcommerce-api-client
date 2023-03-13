import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    CheckoutToken,
    CheckoutTokenRequest,
} from "../model/generated/checkouts.v3";

export class CheckoutTokenApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createCheckoutToken<
        T extends CheckoutTokenRequest,
        R extends CheckoutToken
    >(checkoutId: number, checkoutTokenRequest: T): Promise<R> {
        const response = await this.apiClient.post(
            `/v3/checkouts/${checkoutId}/token`,
            checkoutTokenRequest
        );
        return response.data;
    }
}
