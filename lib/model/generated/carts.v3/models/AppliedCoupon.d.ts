/**
 * |Type `int`|Type Name|
 * |-|-|
 * |`0`|`per_item_discount`|
 * |`1`|`percentage_discount`|
 * |`2`|`per_total_discount`|
 * |`3`|`shipping_discount`|
 * |`4`|`free_shipping`|
 * |`5`|`promotion`|
 */
export type AppliedCoupon = {
    /**
     * The coupon code.
     */
    code: string;
    /**
     * The coupon ID. (read-only)
     */
    readonly id?: string;
    /**
     * Key name to identify the type of coupon.
     *
     * type 0: per_item_discount
     * type 1: percentage_discount
     * type 2: per_total_discount
     * type 3: shipping_discount
     * type 4: free_shipping
     * type 5: promotion
     */
    readonly coupon_type?: AppliedCoupon.coupon_type;
    /**
     * The discounted amount applied within a given context.
     */
    readonly discounted_amount?: number;
};
export declare namespace AppliedCoupon {
    /**
     * Key name to identify the type of coupon.
     *
     * type 0: per_item_discount
     * type 1: percentage_discount
     * type 2: per_total_discount
     * type 3: shipping_discount
     * type 4: free_shipping
     * type 5: promotion
     */
    enum coupon_type {
        _0 = "0",
        _1 = "1",
        _2 = "2",
        _3 = "3",
        _4 = "4",
        _5 = "5"
    }
}
