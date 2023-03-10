export type errorDetailed_Full = {
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
    /**
     * Typically a link to BigCommerce API Status codes
     */
    type?: string;
    errors?: any;
};
