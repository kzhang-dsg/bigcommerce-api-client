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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantApi = void 0;
const util_1 = require("../util");
const form_data_1 = __importDefault(require("form-data"));
class ProductVariantApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllVariants(productId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/variants`, params), page, limit);
            return response.data;
        });
    }
    createVariant(productId, variant) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/variants`, variant);
            return response.data;
        });
    }
    getVariant(productId, variantId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/variants/${variantId}`, params));
            return response.data;
        });
    }
    updateVariant(productId, variantId, variant) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/variants/${variantId}`, variant);
            return response.data;
        });
    }
    deleteVariant(productId, variantId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}/variants/${variantId}`);
        });
    }
    createVariantImage(productId, variantId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new form_data_1.default();
            formData.append("image_file", image);
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/variants/${variantId}/images`, formData, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });
            return response.data;
        });
    }
}
exports.ProductVariantApi = ProductVariantApi;
