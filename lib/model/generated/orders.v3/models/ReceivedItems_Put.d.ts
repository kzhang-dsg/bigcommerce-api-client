export type ReceivedItems_Put = Array<{
    /**
     * The item ID for updating the received state.
     */
    item_id: number;
    /**
     * The quantity of items to be marked as received.
     */
    received_quantity: number;
    /**
     * The quantity of items to be marked as pending.
     */
    pending_quantity: number;
}>;
