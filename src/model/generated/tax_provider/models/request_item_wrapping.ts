/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { request_item } from './request_item';
import type { request_item_tax_property } from './request_item_tax_property';
import type { TaxClass } from './TaxClass';

/**
 * An **ItemRequestWrapping** represents required information relating to completing tax calculations for a specific line item, including the information used to calculate wrapping tax.
 */
export type request_item_wrapping = {
    /**
     * A unique identifier for this item used to map responses back to the corresponding item on the order.
     */
    id: string;
    /**
     * The UPC or SKU of the item. The UPC is used when both UPC and SKU values are available on the item. Empty string if both UPC and SKU are not available.
     */
    item_code?: string;
    /**
     * The SKU of the item. Empty string if SKU is not available.
     */
    item_reference?: string;
    /**
     * A display name for this item.
     */
    name?: string;
    /**
     * The final sale price (after discounts, bulk pricing, price lists, etc.) prior to having taxes calculated. If the merchant lists prices inclusive of tax, this price will already be tax inclusive, and so the tax provider will instead calculate the amount of tax that was already included in this price. For multiple quantities, this price includes that multiplication.
     */
    price: {
        /**
         * Note: This amount will be **negative** for order-level refunds and may be **zero** for line-item refunds.
         */
        amount: number;
        /**
         * Note: **Tax Inclusive** and **Tax Exclusive** prices cannot be added together.
         */
        tax_inclusive: boolean;
    };
    quantity: number;
    tax_class?: TaxClass;
    /**
     * Flag whether or not this item is always tax-exempt. For example, gift certificate purchases and order-level refunds are tax-exempt. Tax-exempt items are included in the request for auditing purposes.
     */
    tax_exempt?: boolean;
    /**
     * Merchants may opt to include additional properties that a tax provider can choose to support, factoring these values into tax calculation.
     */
    tax_properties?: Array<request_item_tax_property>;
    /**
     * The type of line item this request represents. This will depend on the item’s position in the request hierarchy. For example, the document request contains a collection of items (which may or may not also have wrapping attached). In addition, each document request also has a shipping line item and handling line item.
     *
     * The type refund is used when the tax estimate request is for an order-level refund.
     */
    type: request_item_wrapping.type;
    wrapping?: request_item;
};

export namespace request_item_wrapping {

    /**
     * The type of line item this request represents. This will depend on the item’s position in the request hierarchy. For example, the document request contains a collection of items (which may or may not also have wrapping attached). In addition, each document request also has a shipping line item and handling line item.
     *
     * The type refund is used when the tax estimate request is for an order-level refund.
     */
    export enum type {
        ITEM = 'item',
        WRAPPING = 'wrapping',
        HANDLING = 'handling',
        SHIPPING = 'shipping',
        REFUND = 'refund',
    }


}

