/**
 * The model for a PUT to update a modifier value on a product.
 */
export type productModifierOptionValue_Put = (({
    /**
     * The flag for preselecting a value as the default on the storefront. This field is not supported for swatch options/modifiers.
     *
     */
    is_default?: boolean;
    /**
     * The text display identifying the value on the storefront. Required in a /POST.
     *
     */
    label: string;
    /**
     * The order in which the value will be displayed on the product page. Required in a /POST.
     *
     */
    sort_order: number;
    /**
     * Extra data describing the value, based on the type of option or modifier with which the value is associated. The `swatch` type option can accept an array of `colors`, with up to three hexidecimal color keys; or an `image_url`, which is a full image URL path including protocol. The `product list` type option requires a `product_id`. The `checkbox` type option requires a boolean flag, called `checked_value`, to determine which value is considered to be the checked state.
     *
     */
    value_data?: any;
} & {
    adjusters?: {
        /**
         * Adjuster for Complex Rules.
         */
        price?: {
            /**
             * The type of adjuster for either the price or the weight of the variant, when the modifier value is selected on the storefront.
             *
             */
            adjuster?: productModifierOptionValue_Put.adjuster | null;
            /**
             * The numeric amount by which the adjuster will change either the price or the weight of the variant, when the modifier value is selected on the storefront.
             *
             */
            adjuster_value?: number;
        };
        /**
         * Adjuster for Complex Rules.
         */
        weight?: {
            /**
             * The type of adjuster for either the price or the weight of the variant, when the modifier value is selected on the storefront.
             *
             */
            adjuster?: productModifierOptionValue_Put.adjuster | null;
            /**
             * The numeric amount by which the adjuster will change either the price or the weight of the variant, when the modifier value is selected on the storefront.
             *
             */
            adjuster_value?: number;
        };
        /**
         * The URL for an image displayed on the storefront when the modifier value is selected.Limit of 8MB per file.
         *
         */
        image_url?: string;
        purchasing_disabled?: {
            /**
             * Flag for whether the modifier value disables purchasing when selected on the storefront. This can be used for temporarily disabling a particular modifier value.
             *
             */
            status?: boolean;
            /**
             * The message displayed on the storefront when the purchasing disabled status is `true`.
             *
             */
            message?: string;
        };
    };
}) & {
    /**
     * The unique numeric ID of the value; increments sequentially.
     *
     */
    id?: number;
});
export declare namespace productModifierOptionValue_Put {
    /**
     * The type of adjuster for either the price or the weight of the variant, when the modifier value is selected on the storefront.
     *
     */
    enum adjuster {
        RELATIVE = "relative",
        PERCENTAGE = "percentage"
    }
}
