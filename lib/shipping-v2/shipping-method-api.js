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
exports.ShippingMethodApi = void 0;
class ShippingMethodApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllShippingMethodsInZone(zoneId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/shipping/zones/${zoneId}/methods`, page, limit);
            return response.data;
        });
    }
    createShippingMethod(zoneId, shippingMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v2/shipping/zones/${zoneId}/methods`, shippingMethod);
            return response.data;
        });
    }
    getShippingMethod(zoneId, shippingMethodId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/shipping/zones/${zoneId}/methods/${shippingMethodId}`);
            return response.data;
        });
    }
    updateShippingMethod(zoneId, shippingMethodId, shippingMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/shipping/zones/${zoneId}/methods/${shippingMethodId}`, shippingMethod);
            return response.data;
        });
    }
    deleteShippingMethod(zoneId, shippingMethodId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/shipping/zones/${zoneId}/methods/${shippingMethodId}`);
        });
    }
}
exports.ShippingMethodApi = ShippingMethodApi;
