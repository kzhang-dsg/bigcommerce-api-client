import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when a product’s inventory increases or decreases.
 *
 * Changes to the following fields trigger this event:
 * * Quantity
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/product/inventory/order/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "product",
         * "id": 167,
         * "inventory": {
             * "product_id": 167,
             * "method": "absolute",
             * "value": 2
             * }
             * }
             * }
             * ```
             */
export type store_product_inventory_order_updated = webhook_callback_base;
