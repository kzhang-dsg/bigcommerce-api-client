import { ApiClient } from "../api-client";
import { MetafieldApi } from "../metafield";
import { CartSingleApi } from "./cart--single-api";
import { CartLineItemApi } from "./cart-item-api";
import { CartRedirectUrlApi } from "./cart-redirect-url-api";
import { CartSettingsApi } from "./cart-settings-api";

export class CartsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly cartsSingle = new CartSingleApi(this.apiClient);
    readonly items = new CartLineItemApi(this.apiClient);
    readonly metafields = new MetafieldApi(this.apiClient, "/v3/catalog/carts");
    readonly redirects = new CartRedirectUrlApi(this.apiClient);
    readonly settings = new CartSettingsApi(this.apiClient);
}
