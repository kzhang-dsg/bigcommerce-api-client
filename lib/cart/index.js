"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartApi = void 0;
const cart_item_api_1 = require("./cart-item-api");
class CartApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.cartItems = new cart_item_api_1.CartItemApi(this.apiClient);
    }
}
exports.CartApi = CartApi;
