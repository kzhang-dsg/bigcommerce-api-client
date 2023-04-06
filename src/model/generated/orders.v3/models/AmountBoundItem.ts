/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Amount } from './Amount';

/**
 * Amount Bound Item
 *
 * Type of refund item that capture refunding of items in the order that are of type amount.
 * * `PRODUCT`
 * * `ORDER`
 * * `SHIPPING`
 * * `HANDLING`
 * * `TAX`
 */
export type AmountBoundItem = {
    /**
     * Type of refund.
     */
    item_type?: AmountBoundItem.item_type;
    /**
     * Order address ID.
     */
    item_id?: number;
    amount?: Amount;
    /**
     * Number of items in refund.
     */
    quantity?: number;
    /**
     * Explanation of refund.
     */
    reason?: string;
};

export namespace AmountBoundItem {

    /**
     * Type of refund.
     */
    export enum item_type {
        PRODUCT = 'PRODUCT',
        ORDER = 'ORDER',
        SHIPPING = 'SHIPPING',
        HANDLING = 'HANDLING',
        TAX = 'TAX',
    }


}

