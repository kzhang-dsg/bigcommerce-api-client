/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CartCoupon } from './CartCoupon';

/**
 * A cart contains a collection of items, prices, discounts, etc. It does not contain customer-related data.
 */
export type checkoutCart = {
    /**
     * Cart ID, provided after creating a cart with a POST.
     */
    id?: string;
    /**
     * ID of the customer to which the cart belongs.
     */
    customer_id?: number;
    /**
     * The cartʼs email. This is the same email that is used in the billing address.
     */
    email?: string;
    /**
     * The currency in which prices are displayed; the store default currency.
     */
    currency?: {
        /**
         * The currency name.
         */
        name?: string;
        /**
         * ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.)
         */
        code?: string;
        /**
         * The currency symbol.
         */
        symbol?: string;
        /**
         * The number of decimal places for the currency. For example, the USD currency has two decimal places.
         */
        decimalPlaces?: number;
    };
    /**
     * Boolean representing whether tax information is included.
     */
    isTaxIncluded?: boolean;
    /**
     * Cost of cart’s contents, before applying discounts.
     */
    baseAmount?: number;
    /**
     * Discounted amount.
     */
    discountAmount?: number;
    /**
     * Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes, where applicable.
     */
    cartAmount?: number;
    coupons?: Array<CartCoupon>;
    discounts?: Array<{
        /**
         * The name provided by the merchant.
         */
        name?: string;
        /**
         * The discounted amount applied within a given context.
         */
        discountedAmount?: number;
    }>;
    lineItems?: any;
    /**
     * Time when the cart was created.
     */
    createdTime?: string;
    /**
     * Time when the cart was last updated.
     */
    updatedTime?: string;
};

