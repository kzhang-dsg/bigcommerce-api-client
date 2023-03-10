/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Failed quote response.
 */
export type FailedQuoteError = {
    order_id?: number;
    /**
     * HTTP status code
     */
    status?: number;
    /**
     * details why the request failed
     */
    error?: string;
};

