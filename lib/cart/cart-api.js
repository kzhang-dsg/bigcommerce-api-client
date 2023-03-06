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
exports.CartApi = void 0;
const util_1 = require("../util");
class CartApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    createCart(createCartRequest, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post((0, util_1.appendQueryString)(`/v3/carts`, params), createCartRequest);
            return response.data;
        });
    }
    getCart(cartId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/carts/${cartId}`, params));
            return response.data;
        });
    }
    updateCustomerId(cartId, updateCustomerIdRequest, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put((0, util_1.appendQueryString)(`/v3/carts/${cartId}`, params), updateCustomerIdRequest);
            return response.data;
        });
    }
    deleteCart(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.delete(`/v3/carts/${cartId}`);
            return response.data;
        });
    }
}
exports.CartApi = CartApi;
