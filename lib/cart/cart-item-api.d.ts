import { ApiClient } from "../api-client";
import { Cart, CartLineItemsRequest, CartLineItemsQueryParam } from "../model/cart";
export declare class CartItemApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addCartLineItems<Params extends CartLineItemsQueryParam, T extends CartLineItemsRequest, R extends Cart>(cartId: number, cartLineItems: T, params?: Params): Promise<R>;
    updateCartLineItem<Params extends CartLineItemsQueryParam, T extends CartLineItemsRequest, R extends Cart>(cartId: number, cartLineItemId: number, cartLineItems: T, params?: Params): Promise<R>;
    deleteCartLineItem<Params extends CartLineItemsQueryParam, R extends Cart>(cartId: number, cartLineItemId: number, params?: Params): Promise<R>;
}
