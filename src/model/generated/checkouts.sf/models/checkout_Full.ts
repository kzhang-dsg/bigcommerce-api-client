/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address_Base } from './address_Base';
import type { checkoutCart } from './checkoutCart';
import type { CheckoutCoupon } from './CheckoutCoupon';
import type { checkoutGiftCertificates } from './checkoutGiftCertificates';
import type { checkoutTax } from './checkoutTax';
import type { consignment_Full } from './consignment_Full';

export type checkout_Full = {
    id?: string;
    cart?: checkoutCart;
    billingAddress?: address_Base;
    consignments?: Array<consignment_Full>;
    /**
     * Coupons applied at the checkout level.
     */
    coupons?: Array<CheckoutCoupon>;
    orderId?: string | null;
    /**
     * Shipping cost before any discounts are applied.
     */
    shippingCostTotal?: number;
    /**
     * Gift wrapping cost for all items, including or excluding tax.
     */
    giftWrappingCostTotal?: number;
    /**
     * Handling cost for all consignments including or excluding tax.
     */
    handlingCostTotal?: number;
    taxTotal?: number;
    taxes?: Array<checkoutTax>;
    /**
     * Subtotal of the checkout before applying item-level discounts. Tax inclusive based on the store settings.
     */
    subtotal?: number;
    /**
     * The total payable amount, before applying any store credit or gift certificate.
     */
    grandTotal?: number;
    /**
     * Applied gift certificate (as a payment method).
     */
    giftCertificates?: Array<checkoutGiftCertificates>;
    /**
     * Time when the cart was created.
     */
    createdTime?: string;
    /**
     * Time when the cart was last updated.
     */
    updatedTime?: string;
    /**
     * Shopperʼs message provided as details for the order to be created from this cart
     */
    customerMessage?: string;
    /**
     * `grandTotal` subtract the store-credit amount
     *
     */
    outstandingBalance?: number;
    /**
     * `true` value indicates StoreCredit has been applied.
     *
     */
    isStoreCreditApplied?: boolean;
};

