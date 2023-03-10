/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Error payload for the BigCommerce API.
 */
export type errorNotFound = {
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

