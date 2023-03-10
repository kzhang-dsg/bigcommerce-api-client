import type { Amount } from './Amount';
export type RefundItem = {
    /**
     * Type of item that was refunded
     */
    item_type?: RefundItem.item_type;
    /**
     * order_product.id corresponding to the item_types of PRODUCT, GIFT_WRAPPING. order_address.id corresponding to the item_types of SHIPPING, HANDLING. order.id corresponding to the item_type of ORDER.
     */
    item_id?: number;
    /**
     * Reason for refunding an item
     */
    reason?: string;
    /**
     * Quantity of item refunded. Note: this will only be populated for item_type PRODUCT
     */
    quantity?: number;
    requested_amount?: Amount;
};
export declare namespace RefundItem {
    /**
     * Type of item that was refunded
     */
    enum item_type {
        PRODUCT = "PRODUCT",
        GIFT_WRAPPING = "GIFT_WRAPPING",
        SHIPPING = "SHIPPING",
        HANDLING = "HANDLING",
        ORDER = "ORDER"
    }
}
