"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsApi = void 0;
const metafield_1 = require("../metafield");
const cart_api_1 = require("./cart-api");
const cart_item_api_1 = require("./cart-item-api");
const cart_redirect_url_api_1 = require("./cart-redirect-url-api");
const cart_settings_api_1 = require("./cart-settings-api");
class CartsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.cartItems = new cart_item_api_1.CartItemApi(this.apiClient);
        this.cartRedirectUrls = new cart_redirect_url_api_1.CartRedirectUrlApi(this.apiClient);
        this.cartSettings = new cart_settings_api_1.CartSettingsApi(this.apiClient);
        this.cart = new cart_api_1.CartApi(this.apiClient);
        this.cartMetafields = new metafield_1.MetafieldApi(this.apiClient, "/v3/catalog/carts");
    }
}
exports.CartsApi = CartsApi;
