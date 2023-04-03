/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Product with a modifier.
 */
export type cart_PostModifier = {
    quantity: number;
    product_id: number;
    /**
     * Optional price override.
     */
    list_price?: number;
    /**
     * Optionally, provide a value to override the product name.
     */
    name?: string;
    /**
     * Needed for Catalog V2.
     */
    option_selections?: Array<{
        option_id?: number;
        option_value?: number;
        /**
         * Override for the selected option or modifier name.
         */
        name?: string;
        /**
         * Override for the selected option value.
         */
        value?: string;
        nameId?: number;
        valueId?: number;
    }>;
};

