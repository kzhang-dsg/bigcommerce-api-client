import { ApiClient } from "../api-client";
import { paymentMethod_Full } from "../model/generated/payment_processing";
import { AcceptedPaymentMethodApi } from "./accepted-payment-method-api";
import { PaymentAccessTokenApi } from "./payment-access-token-api";
import { ProcessPaymentApi } from "./process-payment-api";

export class PaymentProcessingApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly acceptedMethods = new AcceptedPaymentMethodApi(this.apiClient);
    readonly accessTokens = new PaymentAccessTokenApi(this.apiClient);
    readonly processPayment = new ProcessPaymentApi(this.apiClient);

    async getAllPaymentMethods<T extends paymentMethod_Full>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            "/v2/payments/methods",
            page,
            limit
        );
        return response.data;
    }
}
