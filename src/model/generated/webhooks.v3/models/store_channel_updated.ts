/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { webhook_callback_base } from './webhook_callback_base';

/**
 * This webhook is triggered when a channel is updated in the control panel or by API.
 *
 * Changes to the following fields trigger this event:
 * * name
 * * external_id
 * * status
 * * is_listable_from_ui
 * * is_visible
 * * config_meta
 *
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/channel/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "channel",
         * "id": 173331
         * }
         * }
         * ```
         */
        export type store_channel_updated = webhook_callback_base;

