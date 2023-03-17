/**
 * Get All PriceLists.
 */
export type PriceListCollectionResponse = {
    data?: Array<({
        /**
         * The unique numeric ID of the `Price List`; this number increments sequentially.
         *
         */
        id?: number;
        /**
         * The date on which the `Price List` was created.
         *
         */
        date_created?: Date;
        /**
         * The date on which the `Price List` was created.
         *
         */
        date_modified?: Date;
    } & {
        /**
         * The unique name of the Price List. Required in a POST request.
         *
         */
        name: string;
        /**
         * Whether or not this `Price List` and its prices are active. Defaults to `true`.
         *
         */
        active?: boolean;
    })>;
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
