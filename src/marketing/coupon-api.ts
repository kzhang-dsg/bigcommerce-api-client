import { ApiClient } from "../api-client";
import { Count, IdInQueryParams } from "../model/common";
import { coupon_Base, coupon_Full } from "../model/generated/marketing.v2";
import { CouponsQueryParams } from "../model/query/marketing";
import { appendQueryString } from "../util";

export class CouponApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCoupons<
        Params extends CouponsQueryParams,
        T extends coupon_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/coupons", params),
            page,
            limit
        );
        return response.data;
    }

    async createCoupon<T extends coupon_Base, R extends coupon_Full>(
        coupon: T
    ): Promise<R> {
        const response = await this.apiClient.post("/v2/coupons", coupon);
        return response.data;
    }

    async deleteCoupons<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(appendQueryString("/v2/coupons", params));
    }

    async getCouponsCount<T extends Count>(): Promise<T> {
        const response = await this.apiClient.get("/v2/coupons/count");
        return response.data;
    }

    async getCoupon<T extends coupon_Full>(couponId: number): Promise<T> {
        const response = await this.apiClient.get(`/v2/coupons/${couponId}`);
        return response.data;
    }

    async updateCoupon<T extends coupon_Base, R extends coupon_Full>(
        couponId: number,
        coupon: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/coupons/${couponId}`,
            coupon
        );
        return response.data;
    }

    async deleteCoupon(couponId: number): Promise<void> {
        await this.apiClient.delete(`/v2/coupons/${couponId}`);
    }
}
