/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * When applying a manual discount to an order (not a product level discount), the discount is distributed across products in proportion to the products price.
 * `(total_manual_discount*price_ex_tax)/subtotal_ex_tax`
 */
export type orderProductAppliedDiscounts = {
    /**
     * Name of the coupon applied to order.
     */
    id?: string;
    /**
     * Amount of the discount.(Float, Float-As-String, Integer)
     */
    amount?: string;
    /**
     * Name of the coupon.
     * `Manual Discount` when creating a manual discount.
     */
    name?: string;
    /**
     * Coupon Code.
     * There is no code when creating a manual discount.
     */
    code?: string | null;
    /**
     * Determines if the discount if discount was applied at the Order or Product level. Read Only.
     */
    target?: orderProductAppliedDiscounts.target;
};

export namespace orderProductAppliedDiscounts {

    /**
     * Determines if the discount if discount was applied at the Order or Product level. Read Only.
     */
    export enum target {
        ORDER = 'order',
        PRODUCT = 'product',
    }


}

