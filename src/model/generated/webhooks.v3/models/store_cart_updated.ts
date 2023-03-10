/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { webhook_callback_base } from './webhook_callback_base';

/**
 * This webhook fires when one of the following occurs:
 * * A cartʼs line items are modified by adding a new item to a cart, updating an existing itemʼs quantity, or deleting an item.
 * * A shopper enters or changes their email address during guest checkout. This includes signing in to a customer account after creating a guest cart, which associates the accountʼs email address with the cart.
 *
 * The `store/cart/created` webhook firing also triggers this webhook because adding a product to an empty cart is considered an update.
 *
 * Changes to the following fields trigger this event:
 * * Quantity
 * * Item Price
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/cart/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "cart",
         * "id": "09346904-4175-44fd-be53-f7e598531b6c"
         * }
         * }
         * ```
         */
        export type store_cart_updated = webhook_callback_base;

