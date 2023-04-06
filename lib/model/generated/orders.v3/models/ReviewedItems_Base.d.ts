export type ReviewedItems_Base = Array<{
    /**
     * The ID of the item for which reviewed status was updated.
     */
    item_id?: number;
    /**
     * The quantity of items marked as authorized.
     */
    authorized_quantity?: number;
    /**
     * The quantity of items marked as rejected.
     */
    rejected_quantity?: number;
    /**
     * The quantity of items marked as pending.
     */
    pending_quantity?: number;
}>;
