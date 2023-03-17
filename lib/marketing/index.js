"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingApi = void 0;
const banner_api_1 = require("./banner-api");
const coupon_api_1 = require("./coupon-api");
const gift_certificate_api_1 = require("./gift-certificate-api");
class MarketingApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.banners = new banner_api_1.BannerApi(this.apiClient);
        this.coupons = new coupon_api_1.CouponApi(this.apiClient);
        this.giftCertificates = new gift_certificate_api_1.GiftCertificateApi(this.apiClient);
    }
}
exports.MarketingApi = MarketingApi;
