import { ApiClient } from "../api-client";
import { BannerApi } from "./banner-api";
import { CouponApi } from "./coupon-api";
import { GiftCertificateApi } from "./gift-certificate-api";
export declare class MarketingApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly banners: BannerApi;
    readonly coupons: CouponApi;
    readonly giftCertificates: GiftCertificateApi;
}
