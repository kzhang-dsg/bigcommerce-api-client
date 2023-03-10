/**
 * No-content response for the BigCommerce API.
 */
export type betaerrorNoContent = {
    /**
     * 204 HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the situation.
     */
    title?: string;
    type?: string;
    instance?: string;
};
