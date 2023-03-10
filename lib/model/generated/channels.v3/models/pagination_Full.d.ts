/**
 * Data about the pagination.
 *
 */
export type pagination_Full = {
    /**
     * The maximum number of items per page.
     *
     */
    per_page?: number;
    /**
     * Total number of items in the result set.
     *
     */
    total?: number;
    /**
     * Total number of items in the collection response.
     *
     */
    count?: number;
    /**
     * The total number of pages in the collection.
     *
     */
    total_pages?: number;
    /**
     * The current page number.
     */
    current_page?: number;
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
};
