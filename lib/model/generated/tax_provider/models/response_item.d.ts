import type { response_taxprice } from './response_taxprice';
/**
 * The tax liabilities calculated for a specific item.
 *
 * Note: Tax liabilities should be calculated with **quantity** accounted for.
 */
export type response_item = {
    /**
     * A unique identifier for the line item these tax liabilities are calculated for. Must match the corresponding request line item ID.
     */
    id: string;
    price: response_taxprice;
    type: response_item.type;
};
export declare namespace response_item {
    enum type {
        ITEM = "item",
        WRAPPING = "wrapping",
        SHIPPING = "shipping",
        HANDLING = "handling",
        REFUND = "refund"
    }
}
