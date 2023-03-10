import { ApiClient } from "../api-client";
import { CartCreatePostData, Cart_Full } from "../model/generated/carts.v3";
import { CartsQueryParam } from "../model/query/cart";
import { appendQueryString } from "../util";

export class CartSingleApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createCart<
        Params extends CartsQueryParam,
        T extends CartCreatePostData,
        R extends Cart_Full
    >(createCartRequest: T, params?: Params): Promise<R> {
        const response = await this.apiClient.post(
            appendQueryString(`/v3/carts`, params),
            createCartRequest
        );
        return response.data;
    }

    async getCart<Params extends CartsQueryParam, T extends Cart_Full>(
        cartId: number,
        params?: Params
    ): Promise<T> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/carts/${cartId}`, params)
        );
        return response.data;
    }

    async updateCustomerId<Params extends CartsQueryParam, T extends Cart_Full>(
        cartId: number,
        customerId: number,
        params?: Params
    ): Promise<T> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/carts/${cartId}`, params),
            {
                customer_id: customerId,
            }
        );
        return response.data;
    }

    async deleteCart(cartId: number): Promise<void> {
        const response = await this.apiClient.delete(`/v3/carts/${cartId}`);
        return response.data;
    }
}
