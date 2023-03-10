/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { webhook_callback_base } from './webhook_callback_base';

/**
 * This webhook fires on new cart creation when any of the following occur:
 * * a storefront shopper adds their first product to a cart during a new session
 * * thereʼs a successful `POST` request to `/carts` using either the [Storefront](/api-reference/storefront/carts/cart/createacart) API or the [Store Management](/api-reference/store-management/carts/cart/createacart) API
 *
 * Cart creation also fires the `store/cart/updated` webhook.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/created",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c"
         * }
         * }
         * ```
         */
        export type store_cart_created = webhook_callback_base;

