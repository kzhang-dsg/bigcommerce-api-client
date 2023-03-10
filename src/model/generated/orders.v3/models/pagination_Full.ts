/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { links_Full } from './links_Full';

export type pagination_Full = {
    /**
     * Total number of items in the result set.
     */
    total?: number;
    /**
     * Total number of items in the collection response.
     */
    count?: number;
    /**
     * The amount of items returned in the collection per page, controlled by the limit parameter.
     */
    per_page?: number;
    /**
     * The page you are currently on within the collection.
     */
    current_page?: number;
    /**
     * The total number of pages in the collection.
     */
    total_pages?: number;
    links?: links_Full;
};

