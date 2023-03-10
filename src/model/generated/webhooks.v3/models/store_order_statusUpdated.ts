/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { webhook_callback_base } from './webhook_callback_base';

/**
 * This webhook is triggered when an order status changes; for example, from `Pending` to `Awaiting Payment`.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/order/statusUpdated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "order",
         * "id": 250,
         * "status": {
             * "previous_status_id": 1,
             * "new_status_id": 11
             * }
             * }
             * }
             * ```
             */
            export type store_order_statusUpdated = webhook_callback_base;

