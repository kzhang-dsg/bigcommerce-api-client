import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { Refund, RefundQuote_Full, RefundQuote_Post, RefundRequest_Post } from "../model/generated/orders.v3";
import { RefundsQueryParams } from "../model/query/order";
export declare class PaymentActionApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    capture(orderId: number): Promise<any>;
    void(orderId: number): Promise<any>;
    createRefundQuote<T extends RefundQuote_Post, R extends RefundQuote_Full>(orderId: number, refundQuote: T): Promise<Data<R>>;
    createRefund<T extends RefundRequest_Post, R extends Refund>(orderId: number, refund: T): Promise<Data<R>>;
    getRefundsForOrder<T extends Refund>(orderId: number, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getRefund<T extends Refund>(orderId: number, refundId: number): Promise<Data<T>>;
    batchCreateRefundQuotes<T extends RefundQuote_Post, R extends RefundQuote_Full>(refundQuotes: T[]): Promise<PaginatedData<R>>;
    getAllRefunds<Params extends RefundsQueryParams, T extends Refund>(params?: Params, page?: number, limit?: number): Promise<Data<T>>;
    batchCreateRefunds<T extends RefundRequest_Post, R extends Refund>(refunds: T[]): Promise<PaginatedData<R>>;
}
