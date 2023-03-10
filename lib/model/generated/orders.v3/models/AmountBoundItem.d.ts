import type { Amount } from './Amount';
/**
 * Amount Bound Item
 *
 * Type of refund item that capture refunding of items in the order that are of type amount.
 * * `SHIPPING`
 * * `HANDLING`
 *
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
    reason?: string;
};
export declare namespace AmountBoundItem {
    /**
     * Type of refund.
     */
    enum item_type {
        SHIPPING = "SHIPPING",
        HANDLING = "HANDLING"
    }
}
