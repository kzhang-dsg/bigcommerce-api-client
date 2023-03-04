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
exports.ProductImageApi = void 0;
const util_1 = require("../util");
const form_data_1 = __importDefault(require("form-data"));
class ProductImageApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllImages(productId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/images`, params), page, limit);
            return response.data;
        });
    }
    createImage(productId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/images`, image);
            return response.data;
        });
    }
    uploadImage(productId, image, imageId) {
        return __awaiter(this, void 0, void 0, function* () {
            const formData = new form_data_1.default();
            formData.append("image_file", image);
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/images${imageId ? "/" + imageId : ""}`, formData, {
                headers: {
                    "content-type": "multipart/form-data",
                },
            });
            return response.data;
        });
    }
    getImage(productId, imageId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/images/${imageId}`, params));
            return response.data;
        });
    }
    updateImage(productId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/images/${image.id}`, image);
            return response.data;
        });
    }
    deleteImage(productId, imageId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}/images/${imageId}`);
        });
    }
}
exports.ProductImageApi = ProductImageApi;
//# sourceMappingURL=product-image-api.js.map