import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import { paymentMethod_Full } from "../model/generated/payment_processing";
import { AcceptedPaymentMethodQueryParams } from "../model/query/payment";
import { appendQueryString } from "../util";

export class AcceptedPaymentMethodApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAcceptedPaymentMethods<
        Params extends AcceptedPaymentMethodQueryParams,
        T extends paymentMethod_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/payments/methods", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }
}
