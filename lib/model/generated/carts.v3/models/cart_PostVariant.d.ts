/**
 * Product with a variant.
 */
export type cart_PostVariant = {
    quantity?: number;
    product_id?: number;
    /**
     * Optional price override.
     */
    list_price?: number;
    /**
     * Variant ID. Exists only in Catalog V3.
     */
    variant_id?: number;
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
    gift_wrapping?: {
        /**
         * Boolean value that specifies whether items whether items should be wrapped together or wrapped individually.
         */
        wrap_together?: boolean;
        /**
         * Details for the gift wrapping option selected. This can be specified for each line item.
         */
        wrap_details?: Array<{
            /**
             * Identifier of the gift wrapping option selected.
             */
            id?: number;
            /**
             * Custom gift message.
             */
            message?: string;
        }>;
    };
};
