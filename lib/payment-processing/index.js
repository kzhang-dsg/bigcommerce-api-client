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
exports.PaymentProcessingApi = void 0;
const accepted_payment_method_api_1 = require("./accepted-payment-method-api");
const payment_access_token_api_1 = require("./payment-access-token-api");
const process_payment_api_1 = require("./process-payment-api");
class PaymentProcessingApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.acceptedMethods = new accepted_payment_method_api_1.AcceptedPaymentMethodApi(this.apiClient);
        this.accessTokens = new payment_access_token_api_1.PaymentAccessTokenApi(this.apiClient);
        this.processPayment = new process_payment_api_1.ProcessPaymentApi(this.apiClient);
    }
    getAllPaymentMethods(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/payments/methods", page, limit);
            return response.data;
        });
    }
}
exports.PaymentProcessingApi = PaymentProcessingApi;
