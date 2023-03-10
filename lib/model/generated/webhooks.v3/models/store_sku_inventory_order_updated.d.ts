import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when the inventory is updated.
 *
 * Changes to the following fields trigger this event:
 * * Quantity
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/sku/inventory/order/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "sku",
         * "id": 461,
         * "inventory": {
             * "product_id": 167,
             * "method": "absolute",
             * "value": 2,
             * "variant_id": 509
             * }
             * }
             * }
             * ```
             */
export type store_sku_inventory_order_updated = webhook_callback_base;
