/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { product_Base } from './product_Base';
import type { productModifier_Full } from './productModifier_Full';
import type { productOption_Base } from './productOption_Base';
import type { productVariant_Full } from './productVariant_Full';

export type product_Full = ({
    /**
     * ID of the product. Read-Only.
     */
    readonly id?: number;
} & product_Base & {
    /**
     * The date on which the product was created.
     *
     */
    date_created?: Date;
    /**
     * The date on which the product was modified.
     *
     */
    date_modified?: Date;
    /**
     * The unique identifier of the base variant associated with a simple product. This value is `null` for complex products.
     */
    base_variant_id?: number;
    /**
     * The price of the product as seen on the storefront. It will be equal to the `sale_price`, if set, and the `price` if there is not a `sale_price`.
     */
    calculated_price?: number;
    options?: Array<productOption_Base>;
    modifiers?: Array<productModifier_Full>;
    /**
     * Minimum Advertised Price.
     */
    map_price?: number;
    /**
     * Indicates that the product is in an Option Set (legacy V2 concept).
     */
    option_set_id?: number;
    /**
     * Legacy template setting which controls if the option set shows up to the side of or below the product image and description.
     */
    option_set_display?: string;
    variants?: Array<productVariant_Full>;
});

