import { ApiClient } from "../api-client";
import { paymentMethod_Full } from "../model/generated/payment_processing";
import { AcceptedPaymentMethodApi } from "./accepted-payment-method-api";
import { PaymentAccessTokenApi } from "./payment-access-token-api";
import { ProcessPaymentApi } from "./process-payment-api";
export declare class PaymentProcessingApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly acceptedMethods: AcceptedPaymentMethodApi;
    readonly accessTokens: PaymentAccessTokenApi;
    readonly processPayment: ProcessPaymentApi;
    getAllPaymentMethods<T extends paymentMethod_Full>(page?: number, limit?: number): Promise<T[]>;
}
