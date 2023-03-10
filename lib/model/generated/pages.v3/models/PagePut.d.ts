/**
 * Properties of the page modification request body.
 */
export type PagePut = {
    /**
     * The name of the page. Must be unique.
     *
     */
    name?: string;
    /**
     * Boolean value that specifies the visibility of the page in the storefront’s navigation menu.
     *
     */
    is_visible?: boolean;
    /**
     * ID of any parent Web page.
     *
     */
    parent_id?: number;
    /**
     * Specifies the order in which the page is displayed on the storefront. (Lower integers specify earlier display.)
     *
     */
    sort_order?: number;
    /**
     * Specifies the type of the page.
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
    type?: PagePut.type;
    /**
     * Boolean value that specifies whether this page is the storefront’s home page.
     *
     */
    is_homepage?: boolean;
    /**
     * Boolean value. If this value is set to `true`, this page will not be visible when the user is logged in to the store control panel.
     *
     */
    is_customers_only?: boolean;
    /**
     * Applicable when the page type is `contact_form`: contact email address that receives messages sent via the form. Must be unique.
     */
    email?: string;
    meta_title?: string | null;
    /**
     * HTML or variable that populates the elment of this page, in default/desktop view. Required in a `POST` request if the page type is `raw`.
     *
     */
    body?: string | null;
    /**
     * The URL of the RSS feed. Required in a `POST` request if the page type is `rss_feed`.
     *
     */
    feed?: string;
    /**
     * Required in a `POST` request to create a link if the page type is `link`.
     *
     */
    link?: string;
    /**
     * Applicable when the page type is `contact_form`: comma-separated list of keywords representing the fields enabled in the control panel for storefront display. Possible fields include:
     *
     * |Field|Description|
     * |-|-|
     * |`fullname`|Full name of the customer submitting the form|
     * |`phone`|Customer’s phone number, as submitted on the form|
     * |`companyname`|Customer’s submitted company name|
     * |`orderno`|Customer’s submitted order number|
     * |`rma`|Customer’s submitted RMA (Return Merchandise Authorization) number|
     *
     */
    contact_fields?: string;
    /**
     * Comma-separated list of SEO-relevant keywords to include in the element of this page.
     *
     */
    meta_keywords?: string | null;
    /**
     * Description contained within the element of this page.
     *
     */
    meta_description?: string | null;
    /**
     * Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
     *
     */
    search_keywords?: string | null;
    /**
     * Relative URL on the storefront for this page.
     *
     */
    url?: string;
    /**
     * The ID of the channel where this page should be shown.
     *
     */
    channel_id?: number;
};
export declare namespace PagePut {
    /**
     * Specifies the type of the page.
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
