import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import { orderTaxes_Base } from "../model/generated/orders.v2.oas2";
import { OrderTaxesQueryParams } from "../model/query/order";
import { appendQueryString } from "../util";

export class OrderTaxApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllOrderTaxes<
        Params extends OrderTaxesQueryParams,
        T extends orderTaxes_Base
    >(
        orderId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString(`/v2/orders/${orderId}/taxes`, params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }
}
