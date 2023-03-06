import { ApiClient } from "../api-client";
import {
    Cart,
    CartLineItemsRequest,
    CartLineItemsQueryParam,
} from "../model/cart";
import { appendQueryString } from "../util";

export class CartItemApi {
    constructor(private readonly apiClient: ApiClient) {}

    async addCartLineItems<
        Params extends CartLineItemsQueryParam,
        T extends CartLineItemsRequest,
        R extends Cart
    >(cartId: number, cartLineItems: T, params?: Params): Promise<R> {
        const response = await this.apiClient.post(
            appendQueryString(`/v3/carts/${cartId}/items`, params),
            cartLineItems
        );
        return response.data;
    }

    async updateCartLineItem<
        Params extends CartLineItemsQueryParam,
        T extends CartLineItemsRequest,
        R extends Cart
    >(
        cartId: number,
        cartLineItemId: number,
        cartLineItems: T,
        params?: Params
    ): Promise<R> {
        const response = await this.apiClient.put(
            appendQueryString(
                `/v3/carts/${cartId}/items/${cartLineItemId}`,
                params
            ),
            cartLineItems
        );
        return response.data;
    }

    async deleteCartLineItem<
        Params extends CartLineItemsQueryParam,
        R extends Cart
    >(cartId: number, cartLineItemId: number, params?: Params): Promise<R> {
        const response = await this.apiClient.delete(
            appendQueryString(
                `/v3/carts/${cartId}/items/${cartLineItemId}`,
                params
            )
        );
        return response.data;
    }
}
