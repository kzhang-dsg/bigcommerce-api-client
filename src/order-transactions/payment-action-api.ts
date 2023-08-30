import { ApiClient } from "../api-client";
import { Data, Limit, PaginatedData } from "../model/common";
import {
    Refund,
    RefundQuote_Full,
    RefundQuote_Post,
    RefundRequest_Post,
} from "../model/generated/orders.v3";
import { RefundsQueryParams } from "../model/query/order";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 10;

export class PaymentActionApi {
    constructor(private readonly apiClient: ApiClient) {}

    async capture(orderId: number): Promise<any> {
        const response = await this.apiClient.post(
            `/v3/orders/${orderId}/payment_actions/capture`
        );
        return response.data;
    }

    async void(orderId: number): Promise<any> {
        const response = await this.apiClient.post(
            `/v3/orders/${orderId}/payment_actions/void`
        );
        return response.data;
    }

    async createRefundQuote<
        T extends RefundQuote_Post,
        R extends RefundQuote_Full
    >(orderId: number, refundQuote: T): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/orders/${orderId}/payment_actions/refund_quotes`,
            refundQuote
        );
        return response.data;
    }

    async createRefund<T extends RefundRequest_Post, R extends Refund>(
        orderId: number,
        refund: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/orders/${orderId}/payment_actions/refunds`,
            refund
        );
        return response.data;
    }

    async getRefundsForOrder<T extends Refund>(
        orderId: number,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/orders/${orderId}/payment_actions/refunds`,
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getRefund<T extends Refund>(
        orderId: number,
        refundId: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/orders/${orderId}/payment_actions/refunds/${refundId}`
        );
        return response.data;
    }

    async batchCreateRefundQuotes<
        T extends RefundQuote_Post,
        R extends RefundQuote_Full
    >(refundQuotes: T[]): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < refundQuotes.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/orders/payment_actions/refund_quotes",
                refundQuotes.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async getAllRefunds<Params extends RefundsQueryParams, T extends Refund>(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/orders/payment_actions/refunds`, params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async batchCreateRefunds<T extends RefundRequest_Post, R extends Refund>(
        refunds: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < refunds.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/orders/payment_actions/refunds",
                refunds.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }
}
