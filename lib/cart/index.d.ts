import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { CartSingleApi } from "./cart--single-api";
import { CartLineItemApi } from "./cart-item-api";
import { CartRedirectUrlApi } from "./cart-redirect-url-api";
import { CartSettingsApi } from "./cart-settings-api";
export declare class CartsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly cartsSingle: CartSingleApi;
    readonly items: CartLineItemApi;
    readonly metafields: MetafieldApi;
    readonly redirects: CartRedirectUrlApi;
    readonly settings: CartSettingsApi;
}
