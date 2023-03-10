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
exports.MetafieldApi = void 0;
const util_1 = require("../util");
class MetafieldApi {
    constructor(apiClient, baseUrl) {
        this.apiClient = apiClient;
        this.baseUrl = baseUrl;
    }
    getAllMetafields(parentId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`${this.baseUrl}/${parentId}/metafields`, params), page, limit);
            return response.data;
        });
    }
    createMetafield(parentId, metafield) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`${this.baseUrl}/${parentId}/metafields`, metafield);
            return response.data;
        });
    }
    getMetafield(parentId, metafieldId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`${this.baseUrl}/${parentId}/metafields/${metafieldId}`, params));
            return response.data;
        });
    }
    updateMetafield(parentId, metafieldId, metafield) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`${this.baseUrl}/${parentId}/metafields/${metafieldId}`, metafield);
            return response.data;
        });
    }
    deleteMetafield(parentId, metafieldId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.delete(`${this.baseUrl}/${parentId}/metafields/${metafieldId}`);
        });
    }
}
exports.MetafieldApi = MetafieldApi;
