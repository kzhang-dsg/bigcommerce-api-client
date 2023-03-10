export type orderCoupons_Base = {
    /**
     * Numeric ID of the coupon code.
     */
    id?: number;
    /**
     * Numeric ID of the associated coupon.
     */
    coupon_id?: number;
    /**
     * Numeric ID of the associated order.
     */
    order_id?: number;
    /**
     * Coupon code, as a string.
     */
    code?: string | null;
    /**
     * Amount of the discount. This information is returned as in integer. Dollar and percentage discounts will return the same. For example, $3 returns as '3' while 5% will return as 5. Check the discount type to see what type of discount is available.
     */
    amount?: (string | number);
    /**
     * 0: per_item_discount
     * 1: percentage_discount
     * 2: per_total_discount
     * 3: shipping_discount
     * 4: free_shipping
     * 5: promotions
     */
    type?: orderCoupons_Base.type;
    /**
     * The amount off the order the discount is worth. For example, if an order subtotal is $90 and the discount is $3 then it will return as 3.000. If the discount is
     * 3% then will return as 2.7000 or the amount of the order. (Float, Float-As-String, Integer)
     */
    discount?: number;
};
export declare namespace orderCoupons_Base {
    /**
     * 0: per_item_discount
     * 1: percentage_discount
     * 2: per_total_discount
     * 3: shipping_discount
     * 4: free_shipping
     * 5: promotions
     */
    enum type {
        '_0' = 0,
        '_1' = 1,
        '_2' = 2,
        '_3' = 3,
        '_4' = 4,
        '_5' = 5
    }
}
