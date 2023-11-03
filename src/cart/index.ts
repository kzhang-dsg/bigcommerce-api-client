import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { CartLineItemApi } from "./cart-item-api";
import { CartRedirectUrlApi } from "./cart-redirect-url-api";
import { CartSettingsApi } from "./cart-settings-api";
import { IncludeQueryParams } from "../model/common";
import { CartCreatePostData, Cart_Full } from "../model/generated/carts.v3";
import { appendQueryString } from "../util";

export class CartsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly items = new CartLineItemApi(this.apiClient);
    readonly metafields = new MetafieldApi(this.apiClient, "/v3/carts");
    readonly redirects = new CartRedirectUrlApi(this.apiClient);
    readonly settings = new CartSettingsApi(this.apiClient);

    async createCart<
        Params extends IncludeQueryParams,
        T extends CartCreatePostData,
        R extends Cart_Full
    >(createCartRequest: T, params?: Params): Promise<R> {
        const response = await this.apiClient.post(
            appendQueryString(`/v3/carts`, params),
            createCartRequest
        );
        return response.data;
    }

    async getCart<Params extends IncludeQueryParams, T extends Cart_Full>(
        cartId: string,
        params?: Params
    ): Promise<T> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/carts/${cartId}`, params)
        );
        return response.data;
    }

    async updateCustomerId<
        Params extends IncludeQueryParams,
        T extends Cart_Full
    >(cartId: string, customerId: number, params?: Params): Promise<T> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/carts/${cartId}`, params),
            {
                customer_id: customerId,
            }
        );
        return response.data;
    }

    async deleteCart(cartId: string): Promise<void> {
        const response = await this.apiClient.delete(`/v3/carts/${cartId}`);
        return response.data;
    }
}
