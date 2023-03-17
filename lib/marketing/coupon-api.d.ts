import { ApiClient } from "../api-client";
import { Count, IdInQueryParams } from "../model/common";
import { coupon_Base, coupon_Full } from "../model/generated/marketing.v2";
import { CouponsQueryParams } from "../model/query/marketing";
export declare class CouponApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCoupons<Params extends CouponsQueryParams, T extends coupon_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createCoupon<T extends coupon_Base, R extends coupon_Full>(coupon: T): Promise<R>;
    deleteCoupons<Params extends IdInQueryParams>(params?: Params): Promise<void>;
    getCouponsCount<T extends Count>(): Promise<T>;
    getCoupon<T extends coupon_Full>(couponId: number): Promise<T>;
    updateCoupon<T extends coupon_Base, R extends coupon_Full>(couponId: number, coupon: T): Promise<R>;
    deleteCoupon(couponId: number): Promise<void>;
}
