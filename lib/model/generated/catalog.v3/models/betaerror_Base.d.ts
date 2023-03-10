/**
 * Error payload for the BigCommerce API.
 *
 */
export type betaerror_Base = {
    /**
     * The HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
    instance?: string;
};
