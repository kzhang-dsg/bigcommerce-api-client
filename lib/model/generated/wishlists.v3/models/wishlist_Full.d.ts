import type { wishlistItem_Full } from './wishlistItem_Full';
export type wishlist_Full = {
    /**
     * Wishlist ID, provided after creating a wishlist with a POST.
     */
    id?: number;
    /**
     * The ID the customer to which the wishlist belongs.
     */
    customer_id?: number;
    /**
     * The name of the wishlist.
     */
    name?: string;
    /**
     * Whether the wishlist is available to the public.
     */
    is_public?: boolean;
    /**
     * The token of the wishlist. This is created internally within BigCommerce. The wishlist ID is to be used for external apps. Read-Only.
     */
    token?: string;
    /**
     * Array of wishlist items.
     */
    items?: Array<wishlistItem_Full>;
};
