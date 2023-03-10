/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReceivedItems_Put = Array<{
    /**
     * The ID of the item for which to update the received state
     */
    item_id: number;
    /**
     * The quantity of items to be marked as received
     */
    received_quantity: number;
    /**
     * The quantity of items to be marked as pending
     */
    pending_quantity: number;
}>;
