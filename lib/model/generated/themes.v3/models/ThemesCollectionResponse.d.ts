/**
 * Response payload for the BigCommerce API.
 *
 */
export type ThemesCollectionResponse = {
    data?: Array<{
        /**
         * The variations.
         */
        variations?: Array<{
            /**
             * The description.
             */
            description?: string;
            /**
             * The external identifier.
             */
            external_id?: string;
            /**
             * The name.
             */
            name?: string;
            /**
             * The identifier.
             */
            uuid?: string;
        }>;
        /**
         * The identifier.
         */
        uuid?: string;
        /**
         * The theme name identifier.
         */
        name?: string;
        /**
         * Flag to identify private themes.
         */
        is_private?: boolean;
    }>;
    /**
     * Data about the response, including pagination and collection totals.
     */
    meta?: {
        /**
         * Data about the response, including pagination and collection totals.
         */
        pagination?: {
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
             * The amount of items returned in the collection per page, controlled by the limit parameter.
             *
             */
            per_page?: number;
            /**
             * The page you are currently on within the collection.
             *
             */
            current_page?: number;
            /**
             * The total number of pages in the collection.
             *
             */
            total_pages?: number;
            /**
             * Pagination links for the previous and next parts of the whole collection.
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
    };
};
