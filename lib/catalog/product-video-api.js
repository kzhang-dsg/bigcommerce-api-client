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
exports.ProductVideoApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class ProductVideoApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllVideos(productId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/videos`, params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createVideo(productId, video) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/catalog/products/${productId}/videos`, video);
            return response.data;
        });
    }
    getVideo(productId, videoId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/catalog/products/${productId}/videos/${videoId}`, params));
            return response.data;
        });
    }
    updateVideo(productId, videoId, video) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/catalog/products/${productId}/videos/${videoId}`, video);
            return response.data;
        });
    }
    deleteVideo(productId, videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/catalog/products/${productId}/videos/${videoId}`);
        });
    }
}
exports.ProductVideoApi = ProductVideoApi;
