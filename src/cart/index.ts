import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { CartApi } from "./cart-api";
import { CartItemApi } from "./cart-item-api";
import { CartRedirectUrlApi } from "./cart-redirect-url-api";
import { CartSettingsApi } from "./cart-settings-api";

export class CartsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly cartItems = new CartItemApi(this.apiClient);
    readonly cartRedirectUrls = new CartRedirectUrlApi(this.apiClient);
    readonly cartSettings = new CartSettingsApi(this.apiClient);
    readonly cart = new CartApi(this.apiClient);
    readonly cartMetafields = new MetafieldApi(
        this.apiClient,
        "/v3/catalog/carts"
    );
}
