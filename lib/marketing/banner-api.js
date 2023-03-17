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
exports.BannerApi = void 0;
const util_1 = require("../util");
class BannerApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllBanners(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v2/banners", params), page, limit);
            return response.data;
        });
    }
    createBanner(banner) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/banners", banner);
            return response.data;
        });
    }
    deleteBanners() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete("/v2/banners");
        });
    }
    getBanner(bannerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/banners/${bannerId}`);
            return response.data;
        });
    }
    updateBanner(bannerId, banner) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/banners/${bannerId}`, banner);
            return response.data;
        });
    }
    deleteBanner(bannerId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/banners/${bannerId}`);
        });
    }
    getBannersCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/banners/count");
            return response.data;
        });
    }
}
exports.BannerApi = BannerApi;
