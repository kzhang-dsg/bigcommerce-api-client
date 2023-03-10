export type AppliedCoupon = {
    /**
     * The coupon ID.
     */
    id?: string;
    /**
     * the coupon code
     */
    code: string;
    /**
     * The coupon title based on different types provided in control panel section.
     */
    displayName?: string;
    /**
     * Key name to identify the type of coupon.
     */
    couponType?: string;
    /**
     * The discounted amount applied within a given context.
     */
    discountedAmount?: number;
};
