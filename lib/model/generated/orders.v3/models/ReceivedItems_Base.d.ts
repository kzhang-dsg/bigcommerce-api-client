export type ReceivedItems_Base = Array<{
    /**
     * The ID of the item for which received item status was updated
     */
    item_id?: number;
    /**
     * The quantity of items marked as received
     */
    received_quantity?: number;
    /**
     * The quantity of items marked as pending
     */
    pending_quantity?: number;
}>;
