/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StorefrontProductSettings = {
    /**
     * Determines the visibility of the product price.
     *
     */
    show_product_price?: boolean;
    /**
     * Determines the visibility of the product SKU.
     *
     */
    show_product_sku?: boolean;
    /**
     * Determines the visibility of the product's weight.
     *
     */
    show_product_weight?: boolean;
    /**
     * Determines the visibility of the product's brand.
     *
     */
    show_product_brand?: boolean;
    /**
     * Determines the visibility of the product's shipping option.
     *
     */
    show_product_shipping?: boolean;
    /**
     * Determines the visibility of the product's rating.
     *
     */
    show_product_rating?: boolean;
    /**
     * Determines the visibility of the Add to Cart link.
     *
     */
    show_add_to_cart_link?: boolean;
    /**
     * The product's pre-order message. If undefined, the message defaults to the storewide setting.
     *
     */
    default_preorder_message?: string;
    show_breadcrumbs_product_pages?: StorefrontProductSettings.show_breadcrumbs_product_pages;
    /**
     * Determines the visibility of the Add to Cart quantity setting.
     *
     */
    show_add_to_cart_qty_box?: boolean;
    /**
     * Determines the visibilty of the Add to Wishlist setting.
     *
     */
    show_add_to_wishlist?: boolean;
    /**
     * Determines the visibility of the price.
     *
     */
    hide_price_from_guests?: boolean;
};

export namespace StorefrontProductSettings {

    export enum show_breadcrumbs_product_pages {
        SHOW_ONE = 'show_one',
        SHOW_NONE = 'show_none',
    }


}

