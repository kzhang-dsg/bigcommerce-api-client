/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data about the response, including pagination and collection totals.
 *
 */
export type Pagination = {
    /**
     * Total number of returned items across all pages.
     */
    total?: number;
    /**
     * Number of items on current page.
     */
    count?: number;
    /**
     * Maximum number of items per page.
     */
    per_page?: number;
    /**
     * Current page number.
     */
    current_page?: number;
    /**
     * Total number of pages.
     */
    total_pages?: number;
    links?: {
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
};

