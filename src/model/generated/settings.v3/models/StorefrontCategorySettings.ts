/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CategoryListingModeEnumValues } from './CategoryListingModeEnumValues';
import type { ProductSortEnumValues } from './ProductSortEnumValues';

export type StorefrontCategorySettings = {
    category_tree_depth?: number;
    default_product_sort?: ProductSortEnumValues;
    listing_mode?: CategoryListingModeEnumValues;
};

