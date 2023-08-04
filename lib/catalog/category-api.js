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
exports.CategoryApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class CategoryApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllCategories(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/catalog/categories", params), page, limit);
            return response.data;
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/catalog/categories", category);
            return response.data;
        });
    }
    deleteCategories(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v3/catalog/categories", params));
        });
    }
    getCategory(categoryId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/categories/${categoryId}`, params), undefined, common_1.Limit.NONE // Get Category APi does not allow any extra parameters
            );
            return response.data;
        });
    }
    updateCategory(categoryId, category) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/categories/${categoryId}`, category);
            return response.data;
        });
    }
    deleteCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/categories/${categoryId}`);
        });
    }
}
exports.CategoryApi = CategoryApi;
