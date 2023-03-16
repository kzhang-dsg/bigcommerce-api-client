import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import {
    PaymentRequest,
    SuccessPaymentResponse,
} from "../model/generated/payment_processing";

export class ProcessPaymentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async processPayment<
        T extends PaymentRequest,
        R extends SuccessPaymentResponse
    >(paymentRequest: T): Promise<R> {
        const response = await this.apiClient.post(
            "/v3/payments",
            paymentRequest
        );
        return response.data;
    }
}
