export type TokenPostImpersonation = {
    /**
     * Channel ID for requested token
     */
    channel_id: number;
    /**
     * Unix timestamp (UTC time) defining when the token should expire.
     */
    expires_at: number;
};
