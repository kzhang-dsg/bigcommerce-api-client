import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { PaginatedData } from "../model/common";
import { Transaction } from "../model/generated/orders.v3";
import { OrderSettingsApi } from "./order-settings-api";
import { PaymentActionApi } from "./payment-action-api";

export class OrderTransactionsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly orderMetafields = new MetafieldApi(this.apiClient, "/v3/orders");
    readonly orderSettings = new OrderSettingsApi(this.apiClient);
    readonly paymentActions = new PaymentActionApi(this.apiClient);

    async getTransactions<T extends Transaction>(
        orderId: number,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/orders/${orderId}/transactions`,
            page,
            limit
        );
        return response.data;
    }
}
