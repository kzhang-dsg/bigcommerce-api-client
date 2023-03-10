/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { responseCartLineItemsDigitalItemsAllOf0DiscountsItems } from './responseCartLineItemsDigitalItemsAllOf0DiscountsItems';
import type { responseCartLineItemsDigitalItemsAllOf0OptionsItems } from './responseCartLineItemsDigitalItemsAllOf0OptionsItems';

export type responseCartLineItemsDigitalItemsAllOf0 = {
    /**
     * The list of selected options for this product.
     */
    options?: Array<responseCartLineItemsDigitalItemsAllOf0OptionsItems>;
    /**
     * The products brand
     */
    brand?: string;
    /**
     * The total value of all coupons applied to this item.
     */
    couponAmount?: number;
    /**
     * The total value of all discounts applied to this item (excluding coupon).
     */
    discountAmount?: number;
    /**
     * List of discounts applied to this item, as an array of AppliedDiscount objects.
     */
    discounts?: Array<responseCartLineItemsDigitalItemsAllOf0DiscountsItems>;
    /**
     * Item's list price multiplied by the quantity.
     */
    extendedListPrice?: number;
    /**
     * Item's sale price multiplied by the quantity.
     */
    extendedSalePrice?: number;
    /**
     * The line-item ID.
     */
    id?: string;
    /**
     * URL of an image of this item, accessible on the internet.
     */
    imageUrl?: string;
    /**
     * Whether the item is taxable.
     */
    isTaxable?: boolean;
    /**
     * The net item price before discounts and coupons. BigCommerce derives an item’s list price from the product default price or, if applicable, the sale price configured in the admin panel.
     */
    listPrice?: number;
    /**
     * An item’s original price is the same as the product default price in the admin panel.
     */
    originalPrice?: number;
    /**
     * The item's product name.
     */
    name?: string;
    /**
     * The product is part of a bundle such as a product pick list, then the parentId or the main product id will populate.
     */
    parentId?: string;
    /**
     * ID of the product.
     */
    productId?: number;
    /**
     * Quantity of this item.
     */
    quantity: number;
    /**
     * Item's price after all discounts are applied. (The final price before tax calculation.)
     */
    salePrice?: number;
    /**
     * SKU of the variant.
     */
    sku?: string;
    /**
     * The product URL.
     */
    url?: string;
    /**
     * ID of the variant.
     */
    variantId?: number;
};

