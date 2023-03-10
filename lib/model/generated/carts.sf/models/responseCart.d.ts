import type { responseCartCoupons } from './responseCartCoupons';
import type { responseCartCurrency } from './responseCartCurrency';
import type { responseCartDiscounts } from './responseCartDiscounts';
import type { responseCartLineItems } from './responseCartLineItems';
/**
 * Cart object used in storefront cart responses.
 */
export type responseCart = {
    /**
     * Cart ID, provided after creating a cart with a POST.
     */
    id?: string;
    /**
     * ID of the customer to which the cart belongs.
     */
    customerId?: number;
    /**
     * The cart's email. This is the same email that is used in the billing address
     */
    email?: string;
    currency?: responseCartCurrency;
    /**
     * Whether this item is taxable.
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
     * Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes (where applicable).
     */
    cartAmount?: number;
    coupons?: responseCartCoupons;
    discounts?: responseCartDiscounts;
    lineItems?: responseCartLineItems;
    /**
     * Time when the cart was created.
     */
    createdTime?: string;
    /**
     * Time when the cart was last updated.
     */
    updatedTime?: string;
    /**
     * Locale of the cart.
     */
    locale?: string;
};
