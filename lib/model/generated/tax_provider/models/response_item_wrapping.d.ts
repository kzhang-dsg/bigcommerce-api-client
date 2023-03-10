import type { response_item } from './response_item';
import type { response_taxprice } from './response_taxprice';
/**
 * The tax liabilities calculated for a specific item, including the liabilities for wrapping tax.
 *
 * Note: Tax liabilities should be calculated with **quantity** accounted for.
 */
export type response_item_wrapping = {
    /**
     * A unique identifier for the line item these tax liabilities are calculated for. Must match the corresponding request line item ID.
     */
    id: string;
    price: response_taxprice;
    type: response_item_wrapping.type;
    wrapping?: response_item;
};
export declare namespace response_item_wrapping {
    enum type {
        ITEM = "item",
        WRAPPING = "wrapping",
        SHIPPING = "shipping",
        HANDLING = "handling",
        REFUND = "refund"
    }
}
