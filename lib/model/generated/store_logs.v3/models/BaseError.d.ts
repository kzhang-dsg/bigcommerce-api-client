/**
 * Error payload for the BigCommerce API.
 *
 */
export type BaseError = {
    /**
     * The HTTP status code.
     *
     */
    status?: number;
    /**
     * The title of the message describing the particular error.
     *
     */
    title?: string;
    type?: string;
    instance?: string;
};
