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
exports.CheckoutsApi = void 0;
const checkout_billing_address_api_1 = require("./checkout-billing-address-api");
const checkout_consignment_api_1 = require("./checkout-consignment-api");
const checkout_discount_api_1 = require("./checkout-discount-api");
const checkout_order_api_1 = require("./checkout-order-api");
const checkout_settings_api_1 = require("./checkout-settings-api");
const checkout_token_api_1 = require("./checkout-token-api");
class CheckoutsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.checkoutBillingAddress = new checkout_billing_address_api_1.CheckoutBillingAddressApi(this.apiClient);
        this.checkoutConsignments = new checkout_consignment_api_1.CheckoutConsignmentApi(this.apiClient);
        this.checkoutDiscounts = new checkout_discount_api_1.CheckoutDiscountApi(this.apiClient);
        this.checkoutOrders = new checkout_order_api_1.CheckoutOrderApi(this.apiClient);
        this.checkoutSettings = new checkout_settings_api_1.CheckoutSettingsApi(this.apiClient);
        this.checkoutToken = new checkout_token_api_1.CheckoutTokenApi(this.apiClient);
    }
    getCheckout(checkoutId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/checkouts/${checkoutId}`);
            return response.data;
        });
    }
    updateCustomerMessages(checkoutId, customerMessages) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/checkouts/${checkoutId}`, customerMessages);
            return response.data;
        });
    }
}
exports.CheckoutsApi = CheckoutsApi;
