export type CheckoutTokenRequest = {
    maxUses?: number;
    /**
     * Time-to-live (TTL) is the number of seconds the token is set to exist before being discarded.
     */
    ttl?: number;
};
