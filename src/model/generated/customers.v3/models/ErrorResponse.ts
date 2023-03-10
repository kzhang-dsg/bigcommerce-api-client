/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ErrorResponse = {
    /**
     * The HTTP status code.
     */
    status?: number;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    /**
     * A link to a list of BigCommerce API status codes.
     */
    type?: string;
    instance?: string;
    errors?: Record<string, string>;
};

