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
exports.OrderApi = void 0;
const util_1 = require("../util");
const order_coupon_api_1 = require("./order-coupon-api");
const order_message_api_1 = require("./order-message-api");
const order_product_api_1 = require("./order-product-api");
class OrderApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.orderCoupons = new order_coupon_api_1.OrderCouponApi(this.apiClient);
        this.orderMessages = new order_message_api_1.OrderMessageApi(this.apiClient);
        this.orderProducts = new order_product_api_1.OrderProductApi(this.apiClient);
    }
    getAllOrders(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v2/orders", params), page, limit);
            return response.data;
        });
    }
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/orders", order);
            return response.data;
        });
    }
    getOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/orders/${orderId}`);
            return response.data;
        });
    }
    updateOrder(orderId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/orders/${orderId}`, order);
            return response.data;
        });
    }
    archiveOrder(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/orders/${orderId}`);
        });
    }
    deleteAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/orders`);
        });
    }
    getOrdersCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/orders/count");
            return response.data;
        });
    }
}
exports.OrderApi = OrderApi;
