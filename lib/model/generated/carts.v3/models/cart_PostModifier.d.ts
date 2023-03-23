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
     * Optionally, provide a value to override the product weight.
     */
    weight?: number;
    /**
     * Optionally, provide a value to override the product dimensions.
     */
    dimensions?: {
        /**
         * The custom height of the product.
         */
        height?: number;
        /**
         * The custom width of the product.
         */
        width?: number;
        /**
         * The custom depth of the product.
         */
        depth?: number;
    };
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
