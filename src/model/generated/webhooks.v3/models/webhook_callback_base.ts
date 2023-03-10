/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type webhook_callback_base = {
    /**
     * Hook creation date, in Unix timestamp format.
     */
    readonly created_at?: number;
    /**
     * A numerical identifier that is unique to each store.
     */
    store_id?: string;
    /**
     * Will always follow the pattern `stores/store_hash`. This is the store that created the webhook.
     */
    producer?: string;
    /**
     * The event registered when the webhook was created.
     */
    scope?: string;
    /**
     * The payload data encoded in JSON format and then passed through SH1 encryption.
     */
    hash?: string;
};

