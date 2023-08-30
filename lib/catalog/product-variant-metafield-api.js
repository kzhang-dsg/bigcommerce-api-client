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
exports.ProductVariantMetafieldApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class ProductVariantMetafieldApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllMetafields(productId, variantId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/variants/${variantId}/metafields`, params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createMetafield(productId, variantId, metafield) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/variants/${variantId}/metafields`, metafield);
            return response.data;
        });
    }
    getMetafield(productId, variantId, metafieldId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`, params));
            return response.data;
        });
    }
    updateMetafield(productId, variantId, metafieldId, metafield) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`, metafield);
            return response.data;
        });
    }
    deleteMetafield(productId, variantId, metafieldId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.delete(`/v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`);
        });
    }
}
exports.ProductVariantMetafieldApi = ProductVariantMetafieldApi;
