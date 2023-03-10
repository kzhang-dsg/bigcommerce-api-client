/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pagination links for the previous and next parts of the whole collection.
 */
export type Links = {
    /**
     * Link to the previous page returned in the response.
     */
    previous?: string;
    /**
     * Link to the current page returned in the response.
     */
    current?: string;
    /**
     * Link to the next page returned in the response.
     */
    next?: string;
};

