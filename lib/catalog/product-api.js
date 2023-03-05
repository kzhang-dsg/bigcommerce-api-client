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
exports.ProductApi = void 0;
const util_1 = require("../util");
class ProductApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllProducts(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/catalog/products", params), page, limit);
            return response.data;
        });
    }
    batchUpdateProducts(products, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put((0, util_1.appendQueryString)("/v3/catalog/products", params), products);
            return response.data;
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/catalog/products", product);
            return response.data;
        });
    }
    deleteProducts(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v3/catalog/products", params));
        });
    }
    getProduct(productId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}`, params));
            return response.data;
        });
    }
    updateProduct(product, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put((0, util_1.appendQueryString)(`/v3/catalog/products/${product.id}`, params), product);
            return response.data;
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}`);
        });
    }
}
exports.ProductApi = ProductApi;
