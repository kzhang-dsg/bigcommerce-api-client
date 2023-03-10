/**
 * Error payload for the BigCommerce API.
 */
export type betaerrorNotFound = {
    /**
     * 404 HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    type?: string;
    instance?: string;
};
