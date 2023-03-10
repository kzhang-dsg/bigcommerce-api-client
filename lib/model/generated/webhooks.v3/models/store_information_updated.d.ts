import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when changes are made to store settings.
 *
 * Changes to the following fields trigger this event:
 * * Store Name
 * * Store Address
 * * Store Country
 * * Address Type
 * * Email
 * * Phone
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/information/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "store"
         * }
         * }
         * ```
         */
export type store_information_updated = webhook_callback_base;
