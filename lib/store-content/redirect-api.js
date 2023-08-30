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
exports.RedirectApi = void 0;
const common_1 = require("../model/common");
class RedirectApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllRedirects(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/redirects", page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createRedirect(redirect) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/redirects", redirect);
            return response.data;
        });
    }
    deleteRedirects() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete("/v2/redirects");
        });
    }
    getRedirect(redirectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/redirects/${redirectId}`);
            return response.data;
        });
    }
    updateRedirect(redirectId, redirect) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/redirects/${redirectId}`, redirect);
            return response.data;
        });
    }
    deleteRedirect(redirectId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/redirects/${redirectId}`);
        });
    }
    getRedirectsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/redirects/count");
            return response.data;
        });
    }
}
exports.RedirectApi = RedirectApi;
