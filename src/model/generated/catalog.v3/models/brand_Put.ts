/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Common Brand properties.
 */
export type brand_Put = {
    /**
     * Unique ID of the *Brand*. Read-Only.
     */
    readonly id?: number;
    /**
     * The name of the brand. Must be unique.
     * Required in POST.
     */
    name: string;
    /**
     * The title shown in the browser while viewing the brand.
     *
     */
    page_title?: string;
    /**
     * Comma-separated list of meta keywords to include in the HTML.
     *
     */
    meta_keywords?: Array<string>;
    /**
     * A meta description to include.
     *
     */
    meta_description?: string;
    /**
     * A comma-separated list of keywords that can be used to locate this brand.
     *
     */
    search_keywords?: string;
    /**
     * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/brands/{brandId}/image`, or by providing a publicly accessible URL in this field.
     *
     */
    image_url?: string;
    /**
     * The custom URL for the brand on the storefront.
     */
    custom_url?: {
        /**
         * Brand URL on the storefront.
         *
         */
        url?: string;
        /**
         * Returns `true` if the URL has been changed from its default state (the auto-assigned URL that BigCommerce provides).
         *
         */
        is_customized?: boolean;
    };
};

