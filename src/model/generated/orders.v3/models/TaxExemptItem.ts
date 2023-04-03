/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Amount } from './Amount';

/**
 * Use this to refund a custom value at the order level. When `item_type` is set to `ORDER`, tax is not re-calculated.
 */
export type TaxExemptItem = {
    /**
     * The type of refund. When `item_type` is set to `ORDER`, tax is not re-calculated.
     */
    item_type?: TaxExemptItem.item_type;
    /**
     * Numeric ID of the product in the order.
     */
    item_id?: number;
    amount?: Amount;
    /**
     * Reason for the refund.
     */
    reason?: string;
};

export namespace TaxExemptItem {

    /**
     * The type of refund. When `item_type` is set to `ORDER`, tax is not re-calculated.
     */
    export enum item_type {
        ORDER = 'ORDER',
    }


}

