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
exports.AbandonedCartApi = void 0;
const abandoned_cart_settings_api_1 = require("./abandoned-cart-settings-api");
class AbandonedCartApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.abandonedCartSSettings = new abandoned_cart_settings_api_1.AbandonedCartSSettingsApi(this.apiClient);
    }
    getAbandonedCart(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/abandoned-carts/${token}`);
            return response.data;
        });
    }
}
exports.AbandonedCartApi = AbandonedCartApi;
