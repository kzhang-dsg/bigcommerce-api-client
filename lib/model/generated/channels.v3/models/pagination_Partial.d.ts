/**
 * Data about the pagination.
 *
 */
export type pagination_Partial = {
    /**
     * Total number of items in the collection response.
     *
     */
    count?: number;
    /**
     * Total number of items in the result set.
     *
     */
    total?: number;
    /**
     * Pagination links for the previous, current, or next parts of the whole collection.
     *
     */
    links?: {
        /**
         * Link to the previous page returned in the response.
         *
         */
        previous?: string;
        /**
         * Link to the current page returned in the response.
         *
         */
        current?: string;
        /**
         * Link to the next page returned in the response.
         *
         */
        next?: string;
    };
    /**
     * The total number of pages in the collection.
     *
     */
    total_pages?: number;
};
