import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Checkout, CouponCodeRequest } from "../model/generated/checkouts.v3";

export class CheckoutCouponApi {
    constructor(private readonly apiClient: ApiClient) {}

    async addCouponToCheckout<T extends CouponCodeRequest, R extends Checkout>(
        checkoutId: number,
        coupon: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post(
            `/v3/checkouts/${checkoutId}/coupons`,
            coupon
        );
        return response.data;
    }

    async deleteCheckoutCoupon(
        checkoutId: number,
        couponCode: string
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/checkouts/${checkoutId}/coupons/${couponCode}`
        );
    }
}
