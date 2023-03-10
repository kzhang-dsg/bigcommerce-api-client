export type ChannelOrderSettings = {
    /**
     * Channel notification settings.
     */
    notifications?: {
        /**
         * Channel order notification settings.
         */
        order_placed?: {
            /**
             * Email addresses channel order notifications will be sent to. If null will fall back to global value. Empty array disables order notifications for channel.
             */
            email_addresses?: Array<string> | null;
        };
        /**
         * Channel order invoice forward settings.
         */
        forward_invoice?: {
            /**
             * Email addresses channel order invoices will be forwarded to. If null will fall back to global value. Empty array disables forwarding order invoices for channel.
             */
            email_addresses?: Array<string> | null;
        };
    };
};
