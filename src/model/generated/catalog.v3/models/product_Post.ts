/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { product_Base } from './product_Base';
import type { productVariant_Post_Product } from './productVariant_Post_Product';

/**
 * The model for a POST to create a product.
 */
export type product_Post = (product_Base & {
    variants?: Array<productVariant_Post_Product>;
});

