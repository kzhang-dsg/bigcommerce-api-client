import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { CartLineItemApi } from "./cart-item-api";
import { CartRedirectUrlApi } from "./cart-redirect-url-api";
import { CartSettingsApi } from "./cart-settings-api";
import { IncludeQueryParams } from "../model/common";
import { CartCreatePostData, Cart_Full } from "../model/generated/carts.v3";
export declare class CartsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly items: CartLineItemApi;
    readonly metafields: MetafieldApi;
    readonly redirects: CartRedirectUrlApi;
    readonly settings: CartSettingsApi;
    createCart<Params extends IncludeQueryParams, T extends CartCreatePostData, R extends Cart_Full>(createCartRequest: T, params?: Params): Promise<R>;
    getCart<Params extends IncludeQueryParams, T extends Cart_Full>(cartId: string, params?: Params): Promise<T>;
    updateCustomerId<Params extends IncludeQueryParams, T extends Cart_Full>(cartId: string, customerId: number, params?: Params): Promise<T>;
    deleteCart(cartId: string): Promise<void>;
}
