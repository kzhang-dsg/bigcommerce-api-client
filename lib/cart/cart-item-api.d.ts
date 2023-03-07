import { ApiClient } from "../api-client";
import { Cart, CartLineItemsRequest, CartsQueryParam } from "../model/cart";
export declare class CartLineItemApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addCartLineItems<Params extends CartsQueryParam, T extends CartLineItemsRequest, R extends Cart>(cartId: number, cartLineItems: T, params?: Params): Promise<R>;
    updateCartLineItem<Params extends CartsQueryParam, T extends CartLineItemsRequest, R extends Cart>(cartId: number, cartLineItemId: number, cartLineItems: T, params?: Params): Promise<R>;
    deleteCartLineItem<Params extends CartsQueryParam, R extends Cart>(cartId: number, cartLineItemId: number, params?: Params): Promise<R>;
}
