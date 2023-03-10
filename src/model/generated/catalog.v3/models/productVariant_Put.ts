/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productVariant_Base } from './productVariant_Base';

/**
 * The model for a PUT to update variants on a product.
 */
export type productVariant_Put = (productVariant_Base & {
    product_id?: number;
    sku?: string;
});

