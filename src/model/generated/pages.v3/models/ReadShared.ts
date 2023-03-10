/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReadShared = {
    /**
     * The name of the page. Must be unique.
     */
    name: string;
    /**
     * Indicates whether the page is available to users and visible in any menus.
     */
    is_visible?: boolean;
    /**
     * ID of the parent page, if any.
     */
    parent_id?: number;
    /**
     * Determines the order in which the page is displayed in the parent page’s menu. Pages with lower integers display earlier.
     */
    sort_order?: number;
    /**
     * Determines the type of page. See [Pages v3 page types](/docs/rest-content/pages#page-types) for more about the differences.
     */
    type: ReadShared.type;
    /**
     * Determines whether this page loads at the siteʼs root route. For example, at `https://example.com/`.
     */
    is_homepage?: boolean;
    /**
     * When `true`, this page is not visible to merchant users who are signed in to the store control panel.
     */
    is_customers_only?: boolean;
};

export namespace ReadShared {

    /**
     * Determines the type of page. See [Pages v3 page types](/docs/rest-content/pages#page-types) for more about the differences.
     */
    export enum type {
        PAGE = 'page',
        CONTACT_FORM = 'contact_form',
        RAW = 'raw',
        BLOG = 'blog',
        FEED = 'feed',
        LINK = 'link',
    }


}

