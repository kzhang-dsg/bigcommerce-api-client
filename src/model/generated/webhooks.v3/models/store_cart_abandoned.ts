/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { webhook_callback_base } from './webhook_callback_base';

/**
 * This webhook fires after a cart is abandoned. BigCommerce considers a cart abandoned when it has no activity for at least one hour. This webhook is available for all store plans, regardless of whether the Abandoned Cart Saver feature is enabled.
 *
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/abandoned",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c",
         * "token": "1eed6d2d979776ff18e695ceeb10ea61"
         * }
         * }
         * ```
         */
        export type store_cart_abandoned = webhook_callback_base;

