export type coupon_Base = {
    /**
     * The name of the coupon.
     */
    name: string;
    type: coupon_Base.type;
    /**
     * The discount to apply to an order, as either an amount or a percentage. This field’s usage is determined by the coupon `type`. For example, a `type` of + `percentage_discount` would determine a percentage here.
     */
    amount: string;
    /**
     * Specifies a minimum value that an order must have before the coupon can be applied to it.
     */
    min_purchase?: string;
    /**
     * Specifies when a coupon expires. Coupons need not have an expiry date – you can also control expiry via + `max_uses` or `max_uses_per_customer`. If you do use this date field, the value must be in <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a> format.
     */
    expires?: string;
    /**
     * If the coupon is enabled, this field’s value is `true`; otherwise, `false`.
     */
    enabled?: boolean;
    /**
     * The coupon code that customers will use to receive their discounts. Value must be unique. Only letters, numbers, white space, underscores, and hyphens are allowed.
     */
    code: string;
    /**
     * If it is not included in the PUT request, its existing value on the coupon will be cleared. Also required to be set on the POST request
     */
    applies_to: {
        /**
         * ID of either the products or categories
         */
        ids?: Array<number>;
        /**
         * What the discount applies to. Can be products or categories.
         */
        entity?: string;
    };
    /**
     * Maximum number of times this coupon can be used.
     */
    max_uses?: number;
    /**
     * Maximum number of times each customer can use this coupon.
     */
    max_uses_per_customer?: number;
    restricted_to?: {
        countries?: string;
        null?: string;
    };
    /**
     * This is a list of shipping-method names. A shipping method must be enabled on the store to use it with a coupon. To check which shipping methods are enabled, please use the [List Shipping Methods](/api/v2#list-shipping-methods) endpoint.
     */
    shipping_methods?: Array<string>;
};
export declare namespace coupon_Base {
    enum type {
        PER_ITEM_DISCOUNT = "per_item_discount",
        PER_TOTAL_DISCOUNT = "per_total_discount",
        SHIPPING_DISCOUNT = "shipping_discount",
        FREE_SHIPPING = "free_shipping",
        PERCENTAGE_DISCOUNT = "percentage_discount",
        PROMOTION = "promotion"
    }
}
