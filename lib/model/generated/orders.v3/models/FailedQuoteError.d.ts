/**
 * Failed quote response.
 */
export type FailedQuoteError = {
    order_id?: number;
    /**
     * HTTP status code.
     */
    status?: number;
    /**
     * Details why the request failed.
     */
    error?: string;
};
