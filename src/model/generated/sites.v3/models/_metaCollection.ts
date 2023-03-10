/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meta data relating to pagination.
 */
export type _metaCollection = {
    pagination?: {
        /**
         * Total number of items returned.
         */
        total?: number;
        /**
         * Number of items returned on per page.
         */
        count?: number;
        /**
         * Number of items to be displayed per page.
         */
        per_page?: number;
        /**
         * Current page number.
         */
        current_page?: number;
        /**
         * Total number of pages.
         */
        total_page?: number;
        links?: {
            /**
             * Query string appended to the resource to return to the previous page.
             */
            previous?: string;
            /**
             * Query string appended to the resource to proceed to the next page.
             */
            next?: string;
            /**
             * Query string appended to the resource to show the current page.
             */
            current?: string;
        };
    };
};

