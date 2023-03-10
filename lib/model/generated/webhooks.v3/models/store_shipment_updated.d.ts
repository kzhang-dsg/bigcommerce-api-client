import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when a shipment is updated.
 *
 * Changes to the following fields trigger this event:
 * * Shipping Tracking Number
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/shipment/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "shipment",
         * "id": 12,
         * "orderId": 251
         * }
         * }
         * ```
         */
export type store_shipment_updated = webhook_callback_base;
