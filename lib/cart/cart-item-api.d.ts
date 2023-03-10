import { ApiClient } from "../api-client";
import { Cart_Full, Cart_Line_Item_Update_Post, Cart_Line_Item_Update_Put } from "../model/generated/carts.v3";
import { CartsQueryParam } from "../model/query/cart";
export declare class CartLineItemApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addCartLineItems<Params extends CartsQueryParam, T extends Cart_Line_Item_Update_Post, R extends Cart_Full>(cartId: number, cartLineItems: T, params?: Params): Promise<R>;
    updateCartLineItem<Params extends CartsQueryParam, T extends Cart_Line_Item_Update_Put, R extends Cart_Full>(cartId: number, cartLineItemId: number, cartLineItems: T, params?: Params): Promise<R>;
    deleteCartLineItem<Params extends CartsQueryParam, R extends Cart_Full>(cartId: number, cartLineItemId: number, params?: Params): Promise<R>;
}
