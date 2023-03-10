/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GlobalOrderSettings = {
    /**
     * Global notification settings.
     */
    notifications?: {
        /**
         * Global order notification settings.
         */
        order_placed?: {
            /**
             * Email addresses order notifications will be sent to. Empty array disables order notifications. Not nullable.
             */
            email_addresses?: Array<string>;
        };
        /**
         * Global order invoice forward settings.
         */
        forward_invoice?: {
            /**
             * Email addresses order invoices will be forwarded to. Empty array disables forwarding order invoices. Not nullable.
             */
            email_addresses?: Array<string>;
        };
    };
};

