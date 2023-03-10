/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { productVariant_Base } from './productVariant_Base';

/**
 * The model for a POST to create variants on a product.
 *
 */
export type productVariant_Post_Product = (productVariant_Base & {
    sku?: string;
    option_values?: Array<{
        /**
         * The name of the option.
         *
         */
        option_display_name?: string;
        /**
         * The label of the option value.
         *
         */
        label?: string;
    }>;
});

