/**
 * Common Page properties.
 */
export type PageBase = {
    /**
     * The name of the page. Must be unique.
     *
     */
    name: string;
    /**
     * Determines the visibility of the page in the storefront’s navigation menu.
     *
     * Boolean value that specifies the visibility of the page in the storefront’s navigation menu.
     *
     * Indicates whether the page is available to users and visible in any menus.
     *
     */
    is_visible?: boolean;
    /**
     * ID of any parent Web page.
     *
     */
    parent_id?: number;
    /**
     * Determines the order in which the page is displayed on the storefront. (Lower integers specify earlier display.)
     *
     */
    sort_order?: number;
    /**
     * Determines the type of the page.
     *
     * |Value|Description|
     * |-|-|
     * | `blog` | blog page. Read-only; blog pages can only be created in the store control panel. |
     * |`contact_form`|hosts the store's contact form|
     * |`link`|link to another absolute URL|
     * |`page`|user-defined plain-text page|
     * |`raw`|page that contains markup, such as HTML.|
     * |`rss_feed`|contains syndicated content from an RSS feed|
     */
    type: PageBase.type;
    /**
     * Determines whether this page is the storefront’s home page.
     *
     */
    is_homepage?: boolean;
    /**
     * If `true`, this page will only be visible to customers that are logged in to the store.
     *
     */
    is_customers_only?: boolean;
};
export declare namespace PageBase {
    /**
     * Determines the type of the page.
     *
     * |Value|Description|
     * |-|-|
     * | `blog` | blog page. Read-only; blog pages can only be created in the store control panel. |
     * |`contact_form`|hosts the store's contact form|
     * |`link`|link to another absolute URL|
     * |`page`|user-defined plain-text page|
     * |`raw`|page that contains markup, such as HTML.|
     * |`rss_feed`|contains syndicated content from an RSS feed|
     */
    enum type {
        PAGE = "page",
        RAW = "raw",
        CONTACT_FORM = "contact_form",
        FEED = "feed",
        LINK = "link",
        BLOG = "blog"
    }
}
