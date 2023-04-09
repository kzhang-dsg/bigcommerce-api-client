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
exports.PaymentActionApi = void 0;
const util_1 = require("../util");
const MAX_BATCH_SIZE = 10;
class PaymentActionApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    capture(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/orders/${orderId}/payment_actions/capture`);
            return response.data;
        });
    }
    void(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/orders/${orderId}/payment_actions/void`);
            return response.data;
        });
    }
    createRefundQuote(orderId, refundQuote) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/orders/${orderId}/payment_actions/refund_quotes`, refundQuote);
            return response.data;
        });
    }
    createRefund(orderId, refund) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/orders/${orderId}/payment_actions/refunds`, refund);
            return response.data;
        });
    }
    getRefundsForOrder(orderId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/orders/${orderId}/payment_actions/refunds`, page, limit);
            return response.data;
        });
    }
    getRefund(orderId, refundId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/orders/${orderId}/payment_actions/refunds/${refundId}`);
            return response.data;
        });
    }
    batchCreateRefundQuotes(refundQuotes) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { data: [], meta: {} };
            for (let i = 0; i < refundQuotes.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.put("/v3/orders/payment_actions/refund_quotes", refundQuotes.slice(i, i + MAX_BATCH_SIZE));
                result.data = (_a = result.data) === null || _a === void 0 ? void 0 : _a.concat(response.data.data);
            }
            return result;
        });
    }
    getAllRefunds(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/orders/payment_actions/refunds`, params), page, limit);
            return response.data;
        });
    }
    batchCreateRefunds(refunds) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { data: [], meta: {} };
            for (let i = 0; i < refunds.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.put("/v3/orders/payment_actions/refunds", refunds.slice(i, i + MAX_BATCH_SIZE));
                result.data = (_a = result.data) === null || _a === void 0 ? void 0 : _a.concat(response.data.data);
            }
            return result;
        });
    }
}
exports.PaymentActionApi = PaymentActionApi;
