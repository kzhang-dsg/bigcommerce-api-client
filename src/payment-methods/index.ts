import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import { payment_Base } from "../model/generated/payment_methods.v2";

export class PaymentMethodsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllPaymentMethods<T extends payment_Base>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            "/v2/payments/methods",
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }
}
