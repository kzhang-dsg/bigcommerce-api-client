/**
 * Details/configuration for the product to request a price for.
 */
export type Item = {
    /**
     * The (required) product ID of the item
     */
    product_id?: number;
    /**
     * The (optional) variant ID of the item
     */
    variant_id?: number;
    /**
     * The (optional) option configuration of the product. May be "partially" configured for estimates.
     */
    options?: Array<{
        /**
         * The ID of the variant option or modifier option being configured for this product
         */
        option_id?: number;
        /**
         * The ID of the value matching the option being configured. Note: must be ID, not the value.
         */
        value_id?: number;
    }>;
};
