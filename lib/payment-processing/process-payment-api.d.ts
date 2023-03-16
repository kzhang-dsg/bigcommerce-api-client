import { ApiClient } from "../api-client";
import { PaymentRequest, SuccessPaymentResponse } from "../model/generated/payment_processing";
export declare class ProcessPaymentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    processPayment<T extends PaymentRequest, R extends SuccessPaymentResponse>(paymentRequest: T): Promise<R>;
}
