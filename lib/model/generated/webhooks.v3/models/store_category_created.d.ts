import type { callback_category_data } from './callback_category_data';
import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when a category is created.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/category/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "category",
         * "id": 42
         * }
         * }
         * ```
         */
export type store_category_created = (webhook_callback_base & callback_category_data);
