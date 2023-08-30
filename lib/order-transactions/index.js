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
exports.OrderTransactionsApi = void 0;
const metafield_1 = require("../metafield");
const common_1 = require("../model/common");
const order_settings_api_1 = require("./order-settings-api");
const payment_action_api_1 = require("./payment-action-api");
class OrderTransactionsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.orderMetafields = new metafield_1.MetafieldApi(this.apiClient, "/v3/orders");
        this.orderSettings = new order_settings_api_1.OrderSettingsApi(this.apiClient);
        this.paymentActions = new payment_action_api_1.PaymentActionApi(this.apiClient);
    }
    getTransactions(orderId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/orders/${orderId}/transactions`, page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
}
exports.OrderTransactionsApi = OrderTransactionsApi;
