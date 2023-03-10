import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook is triggered when a subscriber is deleted.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/subscriber/deleted",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "subscriber",
         * "id": 5
         * }
         * }
         * ```
         */
export type store_subscriber_deleted = webhook_callback_base;
