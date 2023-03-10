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
exports.ProductModifierValueApi = void 0;
const util_1 = require("../util");
class ProductModifierValueApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllModifierValues(productId, modifierId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/modifiers/${modifierId}/values`, params), page, limit);
            return response.data;
        });
    }
    createModifierValue(productId, modifierId, modifierValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/modifiers/${modifierId}/values`, modifierValue);
            return response.data;
        });
    }
    getModifierValue(productId, modifierId, valueId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`, params));
            return response.data;
        });
    }
    updateModifierValue(productId, modifierId, modifierValueId, modifierValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${modifierValueId}`, modifierValue);
            return response.data;
        });
    }
    deleteModifierValue(productId, modifierId, valueId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`);
        });
    }
}
exports.ProductModifierValueApi = ProductModifierValueApi;
