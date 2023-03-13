import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Order } from "../model/generated/checkouts.v3";

export class CheckoutOrderApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createOrder<T extends Order>(checkoutId: number): Promise<Data<T>> {
        const response = await this.apiClient.post(
            `/v3/checkouts/${checkoutId}/orders`
        );
        return response.data;
    }
}
