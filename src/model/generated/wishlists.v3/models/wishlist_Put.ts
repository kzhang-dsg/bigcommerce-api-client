/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type wishlist_Put = {
    /**
     * The customer ID. A read-only value.
     */
    customer_id: number;
    /**
     * Whether the wishlist is available to the public.
     */
    is_public?: boolean;
    /**
     * The title of the wishlist.
     */
    name?: string;
    /**
     * Array of wishlist items.
     */
    items: Array<{
        /**
         * The ID of the item.
         */
        id?: number;
        /**
         * The ID of the product.
         */
        product_id?: number;
        /**
         * The variant ID of the product.
         */
        variant_id?: number;
    }>;
};

