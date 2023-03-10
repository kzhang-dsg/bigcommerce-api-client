/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Error = {
    /**
     * The HTTP status code.
     */
    status?: number;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    /**
     * Link to a list of BigCommerce API status codes.
     */
    type?: string;
    /**
     * Provides more details to errors.
     */
    errors?: any;
};

