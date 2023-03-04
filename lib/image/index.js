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
exports.ImageApi = void 0;
class ImageApi {
    constructor(apiClient, baseUrl) {
        this.apiClient = apiClient;
        this.baseUrl = baseUrl;
    }
    createImage(parentId, image) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`${this.baseUrl}/${parentId}/image`, image);
            return response.data;
        });
    }
    deleteImage(parentId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`${this.baseUrl}/${parentId}/image`);
        });
    }
}
exports.ImageApi = ImageApi;
//# sourceMappingURL=index.js.map