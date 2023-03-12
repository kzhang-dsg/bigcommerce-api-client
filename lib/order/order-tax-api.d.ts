import { ApiClient } from "../api-client";
import { orderTaxes_Base } from "../model/generated/orders.v2.oas2";
import { OrderTaxesQueryParams } from "../model/query/order";
export declare class OrderTaxApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllOrderTaxes<Params extends OrderTaxesQueryParams, T extends orderTaxes_Base>(orderId: number, params?: Params, page?: number, limit?: number): Promise<T[]>;
}
