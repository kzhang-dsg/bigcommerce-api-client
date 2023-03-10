/**
 * The model for a PUT to update option values on a product.
 */
export type productOptionValue_Put = ({
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
    /**
     * The unique numeric ID of the value; increments sequentially.
     *
     */
    id?: number;
});
