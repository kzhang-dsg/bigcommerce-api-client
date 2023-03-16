import { ApiClient } from "../api-client";
import { paymentMethod_Full } from "../model/generated/payment_processing";
import { AcceptedPaymentMethodQueryParams } from "../model/query/payment";
export declare class AcceptedPaymentMethodApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAcceptedPaymentMethods<Params extends AcceptedPaymentMethodQueryParams, T extends paymentMethod_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
}
