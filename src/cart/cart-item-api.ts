import { ApiClient } from "../api-client";
import { IncludeQueryParams } from "../model/common";
import {
    Cart_Full,
    Cart_Line_Item_Update_Post,
    Cart_Line_Item_Update_Put,
} from "../model/generated/carts.v3";
import { appendQueryString } from "../util";

export class CartLineItemApi {
    constructor(private readonly apiClient: ApiClient) {}

    async addCartLineItems<
        Params extends IncludeQueryParams,
        T extends Cart_Line_Item_Update_Post,
        R extends Cart_Full
    >(cartId: number, cartLineItems: T, params?: Params): Promise<R> {
        const response = await this.apiClient.post(
            appendQueryString(`/v3/carts/${cartId}/items`, params),
            cartLineItems
        );
        return response.data;
    }

    async updateCartLineItem<
        Params extends IncludeQueryParams,
        T extends Cart_Line_Item_Update_Put,
        R extends Cart_Full
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
        Params extends IncludeQueryParams,
        R extends Cart_Full
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
