"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemApi = void 0;
const util_1 = require("../util");
class CartItemApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    addCartLineItems(cartId, cartLineItems, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post((0, util_1.appendQueryString)(`/v3/carts/${cartId}/items`, params), cartLineItems);
            return response.data;
        });
    }
    updateCartLineItem(cartId, cartLineItemId, cartLineItems, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put((0, util_1.appendQueryString)(`/v3/carts/${cartId}/items/${cartLineItemId}`, params), cartLineItems);
            return response.data;
        });
    }
    deleteCartLineItem(cartId, cartLineItemId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.delete((0, util_1.appendQueryString)(`/v3/carts/${cartId}/items/${cartLineItemId}`, params));
            return response.data;
        });
    }
}
exports.CartItemApi = CartItemApi;
