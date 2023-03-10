export type HistoryEvent = {
    /**
     * Alias where the event occurred.
     */
    scope?: string;
    /**
     * A numerical identifier that is unique to each store.
     */
    store_id?: string;
    /**
     * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
     */
    data?: any;
    /**
     * The payload data encoded in JSON format and then passed through SH1 encryption.
     */
    hash?: string;
    /**
     * UTC timestamp, in seconds, that the events was created.
     */
    created_at?: number;
    /**
     * Will always follow the pattern stores/store_hash. This is the store that created the webhook.
     */
    producer?: string;
};
