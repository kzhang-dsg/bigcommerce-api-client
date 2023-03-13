import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { PaginatedData } from "../model/common";
import { Transaction } from "../model/generated/orders.v3";
import { OrderSettingsApi } from "./order-settings-api";
import { PaymentActionApi } from "./payment-action-api";
export declare class OrderTransactionApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly orderMetafields: MetafieldApi;
    readonly orderSettings: OrderSettingsApi;
    readonly paymentActions: PaymentActionApi;
    getTransactions<T extends Transaction>(orderId: number, page?: number, limit?: number): Promise<PaginatedData<T>>;
}
