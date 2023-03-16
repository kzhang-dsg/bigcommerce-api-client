import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { PaymentAccessToken, PaymentAccessTokenRequest } from "../model/generated/payment_processing";
export declare class PaymentAccessTokenApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    createPaymentAccessToken<T extends PaymentAccessTokenRequest, R extends PaymentAccessToken>(paymentAccessToken: T): Promise<Data<R>>;
}
