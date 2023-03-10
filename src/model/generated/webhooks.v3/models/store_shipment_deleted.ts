/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { webhook_callback_base } from './webhook_callback_base';

/**
 * This webhook is triggered when a shipment is deleted.
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/shipment/deleted",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "shipment",
         * "id": 12,
         * "orderId": 251
         * }
         * }
         * ```
         */
        export type store_shipment_deleted = webhook_callback_base;

