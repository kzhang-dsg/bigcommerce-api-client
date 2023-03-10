/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { webhook_callback_base } from './webhook_callback_base';

/**
 * This webhook fires when a cart/checkout is converted into an order, which is typically after the checkout payment step on the storefront. At this point, the cart is automatically deleted and no longer accessible. This webhook returns both the cart/checkout ID and order ID for correlation purposes.
 *
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/converted",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c",
         * "orderId": 252
         * }
         * }
         * ```
         */
        export type store_cart_converted = webhook_callback_base;

