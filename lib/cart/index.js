"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsApi = void 0;
const metafield_1 = require("../metafield");
const cart__single_api_1 = require("./cart--single-api");
const cart_item_api_1 = require("./cart-item-api");
const cart_redirect_url_api_1 = require("./cart-redirect-url-api");
const cart_settings_api_1 = require("./cart-settings-api");
class CartsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.cartsSingle = new cart__single_api_1.CartSingleApi(this.apiClient);
        this.items = new cart_item_api_1.CartLineItemApi(this.apiClient);
        this.metafields = new metafield_1.MetafieldApi(this.apiClient, "/v3/catalog/carts");
        this.redirects = new cart_redirect_url_api_1.CartRedirectUrlApi(this.apiClient);
        this.settings = new cart_settings_api_1.CartSettingsApi(this.apiClient);
    }
}
exports.CartsApi = CartsApi;
