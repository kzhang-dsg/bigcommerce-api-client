import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { CartApi } from "./cart-api";
import { CartItemApi } from "./cart-item-api";
import { CartRedirectUrlApi } from "./cart-redirect-url-api";
import { CartSettingsApi } from "./cart-settings-api";
export declare class CartsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly cartItems: CartItemApi;
    readonly cartRedirectUrls: CartRedirectUrlApi;
    readonly cartSettings: CartSettingsApi;
    readonly cart: CartApi;
    readonly cartMetafields: MetafieldApi;
}
