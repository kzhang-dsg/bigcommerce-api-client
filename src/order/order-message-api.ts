import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import { orderMessages } from "../model/generated/orders.v2.oas2";
import { OrderMessagesQueryParams } from "../model/query/order";
import { appendQueryString } from "../util";

export class OrderMessageApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getOrderMessages<
        Params extends OrderMessagesQueryParams,
        T extends orderMessages
    >(
        orderId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            appendQueryString(`/v2/orders/${orderId}/messages`, params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }
}
