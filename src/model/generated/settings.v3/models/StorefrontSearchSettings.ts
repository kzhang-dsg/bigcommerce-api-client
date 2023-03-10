/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentSortEnumValues } from './ContentSortEnumValues';
import type { ProductSortEnumValues } from './ProductSortEnumValues';

export type StorefrontSearchSettings = {
    content_product_sort?: ContentSortEnumValues;
    default_product_sort?: ProductSortEnumValues;
    /**
     * Controls whether Product Filtering feature is active on the storefront. Only supports manipulation on a global level.
     */
    product_filtering_enabled?: boolean;
    search_suggest?: boolean;
};

