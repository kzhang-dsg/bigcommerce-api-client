/**
 * The model for a POST to create a custom field on a product.
 */
export type productCustomField_Post = {
    /**
     * The unique numeric ID of the custom field; increments sequentially.
     * Read-Only
     */
    id?: number;
    /**
     * The name of the field, shown on the storefront, orders, etc. Required for /POST
     *
     */
    name: string;
    /**
     * The name of the field, shown on the storefront, orders, etc. Required for /POST
     *
     */
    value: string;
};
