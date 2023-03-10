import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when an order message is created by a customer or in the control panel.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/order/message/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "order",
         * "id": 250,
         * "message": {
             * "order_message_id": 3
             * }
             * }
             * }
             * ```
             */
export type store_order_message_created = webhook_callback_base;
