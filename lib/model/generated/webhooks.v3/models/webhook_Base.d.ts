export type webhook_Base = {
    /**
     * Event you subscribe to.
     */
    scope: string;
    /**
     * URL must be active, return a 200 response, and be served on port 443 (custom ports not currently supported).
     */
    destination: string;
    /**
     * Boolean value that indicates whether the webhook is active or not.
     */
    is_active?: boolean;
    /**
     * Boolean value that identifies whether events are stored that could not be received.
     */
    events_history_enabled?: boolean;
    /**
     * Headers used to validate that webhooks are active. You can pass in any number of custom headers to validate webhooks are being returned.
     */
    headers: {
        custom?: string;
    } | null;
};
