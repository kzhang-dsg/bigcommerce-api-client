/**
 * Gets custom fields associated with a product. These allow you to specify additional information that will appear on the product’s page, such as a book’s ISBN or a DVD’s release date.
 */
export type productCustomField_Base = {
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
