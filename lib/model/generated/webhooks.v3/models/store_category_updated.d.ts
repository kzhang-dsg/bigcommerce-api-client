import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when a category is updated.
 *
 * Changes to the following fields trigger this event:
 * * URL
 * * Name
 * * Redirect Old URLs
 * * Description
 * * Parent Category
 * * Template Layout File
 * * Sort Order
 * * Default Product Sort
 * * Category Image
 * * Page Title
 * * Meta Keywords
 * * Meta Description
 * * Search Keywords
 * * Google Product Category
 * * Enable Google Shopping
 *
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/category/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "category",
         * "id": 42
         * }
         * }
         * ```
         */
export type store_category_updated = webhook_callback_base;
