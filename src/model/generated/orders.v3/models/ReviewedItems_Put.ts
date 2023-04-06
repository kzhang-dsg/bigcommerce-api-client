/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReviewedItems_Put = Array<{
    /**
     * The item ID for updating the reviewed state.
     */
    item_id: number;
    /**
     * The quantity of items to be marked as authorized.
     */
    authorized_quantity: number;
    /**
     * The quantity of items to be marked as rejected.
     */
    rejected_quantity: number;
    /**
     * The quantity of items to be marked as pending.
     */
    pending_quantity: number;
}>;
