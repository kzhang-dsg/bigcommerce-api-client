/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppliedCoupon } from './AppliedCoupon';
import type { LineItemsGet } from './LineItemsGet';

/**
 * A cart contains a collection of items, prices, discounts, etc. It does not contain customer-related data.
 */
export type Cart_Full = {
    /**
     * Cart ID, provided after creating a cart with a POST request.
     */
    id?: string;
    /**
     * Bundled items will have the ID of their parent item.
     */
    parent_id?: string;
    /**
     * ID of the customer to which the cart belongs.
     */
    customer_id?: number;
    /**
     * The cart’s email. This is the same email that is used in the billing address.
     */
    email?: string;
    /**
     * The currency. This is the same for both the cart and its subsequent checkout.
     */
    currency?: {
        /**
         * The [transactional currency](/docs/rest-management/currencies#definitions) code for the cart, formatted as an [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) string.
         */
        code?: string;
    };
    tax_included?: boolean;
    /**
     * Sum of cart line-item amounts before cart-level discounts, coupons, or taxes.
     */
    base_amount?: number;
    /**
     * Discounted amount.
     */
    discount_amount?: number;
    /**
     * Sum of cart line-item amounts minus cart-level discounts and coupons. This amount includes taxes (where applicable).
     */
    cart_amount?: number;
    coupons?: Array<AppliedCoupon>;
    discounts?: Array<{
        /**
         * ID of the applied discount.
         */
        id?: string;
        /**
         * The discounted amount.
         */
        discounted_amount?: number;
    }>;
    line_items?: LineItemsGet;
    /**
     * Time when the cart was created.
     */
    created_time?: string;
    /**
     * Time when the cart was last updated.
     */
    updated_time?: string;
    /**
     * The channel ID. If no channel is specified, defaults to 1.
     */
    channel_id?: number;
    /**
     * Locale of the cart.
     */
    locale?: string;
    /**
     * This is available only when "include=promotions.banners" is presented in the URL.
     */
    promotions?: {
        banners?: {
            /**
             * ID of the promotion.
             */
            id?: string;
            /**
             * Type of the banner.
             */
            type?: string;
            /**
             * An array of the locations where the banner will display.
             */
            page?: Array<string>;
            /**
             * Text of the banner.
             */
            text?: string;
        };
    };
};

