/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The model for a PUT to update a custom field on a product.
 */
export type productCustomField_Put = {
    /**
     * The unique numeric ID of the custom field; increments sequentially. Required to update existing custom field in /PUT request.
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

