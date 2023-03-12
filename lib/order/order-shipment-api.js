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
exports.OrderShipmentApi = void 0;
class OrderShipmentApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getOrderShipments(orderId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/orders/${orderId}/shipments`, page, limit);
            return response.data;
        });
    }
    createOrderShipment(orderId, orderShipment) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v2/orders/${orderId}/shipments`, orderShipment);
            return response.data;
        });
    }
    deleteOrderShipments(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/orders/${orderId}/shipments`);
        });
    }
    getOrderShipmentsCount(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/orders/${orderId}/shipments/count`);
            return response.data;
        });
    }
    getOrderShipment(orderId, orderShipmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/orders/${orderId}/shipments/${orderShipmentId}`);
            return response.data;
        });
    }
    updateOrderShipment(orderId, orderShipmentId, orderShipment) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/orders/${orderId}/shipments/${orderShipmentId}`, orderShipment);
            return response.data;
        });
    }
    deleteOrderShipment(orderId, orderShipmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/orders/${orderId}/shipments/${orderShipmentId}`);
        });
    }
}
exports.OrderShipmentApi = OrderShipmentApi;
