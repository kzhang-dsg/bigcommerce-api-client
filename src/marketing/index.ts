import { ApiClient } from "../api-client";
import { BannerApi } from "./banner-api";
import { CouponApi } from "./coupon-api";
import { GiftCertificateApi } from "./gift-certificate-api";

export class MarketingApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly banners = new BannerApi(this.apiClient);
    readonly coupons = new CouponApi(this.apiClient);
    readonly giftCertificates = new GiftCertificateApi(this.apiClient);
}
