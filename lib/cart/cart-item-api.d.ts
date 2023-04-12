import { ApiClient } from "../api-client";
import { IncludeQueryParams } from "../model/common";
import { Cart_Full, Cart_Line_Item_Update_Post, Cart_Line_Item_Update_Put } from "../model/generated/carts.v3";
export declare class CartLineItemApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addCartLineItems<Params extends IncludeQueryParams, T extends Cart_Line_Item_Update_Post, R extends Cart_Full>(cartId: string, cartLineItems: T, params?: Params): Promise<R>;
    updateCartLineItem<Params extends IncludeQueryParams, T extends Cart_Line_Item_Update_Put, R extends Cart_Full>(cartId: string, cartLineItemId: string, cartLineItems: T, params?: Params): Promise<R>;
    deleteCartLineItem<Params extends IncludeQueryParams, R extends Cart_Full>(cartId: string, cartLineItemId: string, params?: Params): Promise<R>;
}
