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
exports.CouponApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class CouponApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllCoupons(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v2/coupons", params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createCoupon(coupon) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/coupons", coupon);
            return response.data;
        });
    }
    deleteCoupons(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v2/coupons", params));
        });
    }
    getCouponsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/coupons/count");
            return response.data;
        });
    }
    getCoupon(couponId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/coupons/${couponId}`);
            return response.data;
        });
    }
    updateCoupon(couponId, coupon) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/coupons/${couponId}`, coupon);
            return response.data;
        });
    }
    deleteCoupon(couponId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/coupons/${couponId}`);
        });
    }
}
exports.CouponApi = CouponApi;
