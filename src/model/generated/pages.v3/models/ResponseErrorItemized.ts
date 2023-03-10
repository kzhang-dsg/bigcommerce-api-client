/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Error payload for the BigCommerce API.
 *
 */
export type ResponseErrorItemized = {
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
    errors?: Array<string>;
};

