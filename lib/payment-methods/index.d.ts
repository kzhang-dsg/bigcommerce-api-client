import { ApiClient } from "../api-client";
import { payment_Base } from "../model/generated/payment_methods.v2";
export declare class PaymentMethodsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllPaymentMethods<T extends payment_Base>(page?: number, limit?: number): Promise<T[]>;
}
