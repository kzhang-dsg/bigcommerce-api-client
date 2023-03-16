import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    PaymentAccessToken,
    PaymentAccessTokenRequest,
} from "../model/generated/payment_processing";

export class PaymentAccessTokenApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createPaymentAccessToken<
        T extends PaymentAccessTokenRequest,
        R extends PaymentAccessToken
    >(paymentAccessToken: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            "/v3/payments/access_tokens",
            paymentAccessToken
        );
        return response.data;
    }
}
