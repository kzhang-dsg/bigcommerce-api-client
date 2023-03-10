/**
 * Error payload for the BigCommerce API.
 *
 */
export type ResponseErrorBrief = {
    /**
     * The HTTP status code.
     *
     */
    status: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
};
