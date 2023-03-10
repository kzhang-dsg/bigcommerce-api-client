/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddressProperties } from './AddressProperties';
import type { AppliedCoupon } from './AppliedCoupon';
import type { Consignments } from './Consignments';
import type { Currency } from './Currency';
import type { OrderLineItem } from './OrderLineItem';
import type { Status } from './Status';

export type Order = {
    orderId?: number;
    /**
     * The ID of cart that was converted to order.
     */
    cartId?: string;
    currency?: Currency;
    /**
     * Whether this item is taxable.
     */
    isTaxIncluded?: boolean;
    /**
     * Cost of cartʼs contents before applying discounts.
     */
    baseAmount?: number;
    /**
     * Discounted amount.
     */
    discountAmount?: number;
    /**
     * Gift wrapping for all items, including or excluding tax.
     */
    giftWrappingCostTotal?: number;
    /**
     * Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes where applicable.
     */
    orderAmount?: number;
    /**
     * Order amount represented in integer. Eg. 1234 for $12.34
     */
    orderAmountAsInteger?: number;
    /**
     * Array of `AppliedCoupon` objects applied to this cart.
     */
    coupons?: Array<AppliedCoupon>;
    /**
     * Array of `LineItem` objects.
     */
    lineItems?: Array<OrderLineItem>;
    customerId?: string;
    billingAddress?: AddressProperties;
    status?: Status;
    /**
     * Specifies whether this order has at least one digital item.
     */
    hasDigitalItems?: boolean;
    /**
     * Specifies whether this order is fully paid, so that digital items can be downloaded.
     */
    isDownloadable?: boolean;
    /**
     * Specifies whether this order is complete and ready to be taken to the order confirmation page.
     */
    isComplete?: boolean;
    /**
     * Shopperʼs provided message for the order.
     */
    customerMessage?: string;
    shippingCostTotal?: number;
    shippingCostBeforeDiscount?: number;
    handlingCostTotal?: number;
    customerCanBeCreated?: boolean;
    taxes?: Array<{
        name?: string;
        amount?: number;
    }>;
    taxTotal?: number;
    /**
     * ID of the channel which the order belongs to.
     */
    channelId?: number;
    consignments?: Consignments;
};

