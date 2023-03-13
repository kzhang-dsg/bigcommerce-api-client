import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Checkout, CouponCodeRequest } from "../model/generated/checkouts.v3";
export declare class CheckoutCouponApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    addCouponToCheckout<T extends CouponCodeRequest, R extends Checkout>(checkoutId: number, coupon: T): Promise<Data<R>>;
    deleteCheckoutCoupon(checkoutId: number, couponCode: string): Promise<void>;
}
