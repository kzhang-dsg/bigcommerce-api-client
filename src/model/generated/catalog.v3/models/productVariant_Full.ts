/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productVariant_Base } from './productVariant_Base';
import type { productVariantOptionValue_Full } from './productVariantOptionValue_Full';

export type productVariant_Full = (productVariant_Base & {
    id?: number;
    product_id?: number;
    sku?: string;
    /**
     * Read-only reference to v2 API's SKU ID. Null if it is a base variant.
     */
    sku_id?: number | null;
    /**
     * Array of option and option values IDs that make up this variant. Will be empty if the variant is the product's base variant.
     */
    option_values?: Array<productVariantOptionValue_Full>;
    /**
     * The price of the variant as seen on the storefront. This price takes into account `sale_price` and any price adjustment rules that are applicable to this variant.
     *
     */
    calculated_price?: number;
    calculated_weight?: number;
});

