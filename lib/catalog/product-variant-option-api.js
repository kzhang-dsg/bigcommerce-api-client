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
exports.ProductVariantOptionApi = void 0;
const util_1 = require("../util");
class ProductVariantOptionApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllVariantOptions(productId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/options`, params), page, limit);
            return response.data;
        });
    }
    createVariantOption(productId, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/options`, option);
            return response.data;
        });
    }
    getVariantOption(productId, optionId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/options/${optionId}`, params));
            return response.data;
        });
    }
    updateVariantOption(productId, optionId, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/options/${optionId}`, option);
            return response.data;
        });
    }
    deleteVariantOption(productId, optionId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}/options/${optionId}`);
        });
    }
}
exports.ProductVariantOptionApi = ProductVariantOptionApi;
