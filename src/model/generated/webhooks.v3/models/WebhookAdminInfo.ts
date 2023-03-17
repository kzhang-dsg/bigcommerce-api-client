/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WebhookAdminInfo = {
    /**
     * Email addresses to be sent notifications.
     */
    emails?: Array<string>;
    /**
     * List of all the webhooks associated with the provider API account, filtered by the "active" parameter.
     */
    hooks_list?: Array<{
        /**
         * ID of the webhook
         */
        id?: number;
        /**
         * Client ID, unique to the store or app.
         */
        client_id?: string;
        /**
         * Permanent ID of the BigCommerce store.
         */
        store_hash?: string;
        /**
         * Event you subscribe to
         */
        scope?: string;
        /**
         * URL must be active, return a 200 response, and be served on port 443 (custom ports not currently supported)
         */
        destination?: string;
        /**
         * You can pass in any number of custom headers to validate webhooks being returned.
         */
        headers?: any;
        /**
         * If webhook is active or not
         */
        is_active?: boolean;
        /**
         * Created time
         */
        created_at?: number;
        /**
         * Updated time
         */
        updated_at?: number;
    }>;
    /**
     * List of domains (destinations) that are currently on the denylist and are not being sent webhooks.
     */
    blocked_domains?: Array<{
        /**
         * Domain URL to which webhooks are sent.
         */
        destination?: string;
        /**
         * Remaining time in seconds that the domain is on the denylist.
         */
        time_left?: number;
        reasons?: Array<{
            failure_description?: string;
            count?: number;
            /**
             * UTC timestamp in seconds that the events was created
             */
            timestamp?: number;
        }>;
    }>;
};

