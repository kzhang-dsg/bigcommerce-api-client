import type { GiftWrapping } from './GiftWrapping';
export type ItemPhysical = {
    /**
     * The line-item ID.
     */
    id?: string;
    /**
     * Bundled items will have their parentʼs item ID.
     */
    parentId?: string;
    /**
     * ID of the variant.
     */
    variantId?: number;
    /**
     * ID of the product.
     */
    productId?: number;
    /**
     * SKU of the variant.
     */
    sku?: string;
    /**
     * The itemʼs product name.
     */
    name?: string;
    /**
     * The product URL.
     */
    url?: string;
    /**
     * Quantity of this item.
     */
    quantity: number;
    /**
     * Whether the item is taxable.
     */
    isTaxable?: boolean;
    /**
     * A publicly-accessible URL for an image of this item.
     */
    imageUrl?: string;
    /**
     * List of discounts applied to this item. If no discount applied, empty array is returned. If discount has been applied, discount object returned.
     */
    discounts?: any;
    /**
     * The total value of all discounts applied to this item (excluding coupon).
     */
    discountAmount?: number;
    /**
     * The total value of all coupons applied to this item.
     */
    couponAmount?: number;
    /**
     * The itemʼs list price, as quoted by the manufacturer/distributor.
     */
    listPrice?: number;
    /**
     * The itemʼs price after all discounts are applied. (The final price before tax calculation.)
     */
    salePrice?: number;
    /**
     * The itemʼs list price multiplied by the quantity.
     */
    extendedListPrice?: number;
    /**
     * The itemʼs sale price multiplied by the quantity.
     */
    extendedSalePrice?: number;
    /**
     * the product type - physical or digital
     */
    type?: string;
    /**
     * Whether this item has been added automatically by a promotion.
     */
    addedByPromotion?: boolean;
    /**
     * Whether this item requires shipping to a physical address.
     */
    isShippingRequired?: boolean;
    giftWrapping?: GiftWrapping;
    /**
     * Categories the item belongs to.
     */
    categories?: Array<any>;
};
