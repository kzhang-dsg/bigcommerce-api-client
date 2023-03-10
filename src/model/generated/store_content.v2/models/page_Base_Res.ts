/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type page_Base_Res = {
    /**
     * ID of any parent Web page.
     */
    parent_id?: number;
    /**
     * `page`: free-text page
     * `link`: link to another web address
     * `rss_feed`: syndicated content from an RSS feed
     * `contact_form`: When the store's contact form is used.
     *
     *
     */
    type?: page_Base_Res.type;
    /**
     * Where the page’s type is a contact form: object whose members are the fields enabled (in the control panel) for storefront display. Possible members are:`fullname`: full name of the customer submitting the form; `phone`: customer’s phone number, as submitted on the form; `companyname`: customer’s submitted company name; `orderno`: customer’s submitted order number; `rma`: customer’s submitted RMA (Return Merchandise Authorization) number.
     */
    contact_fields?: string;
    /**
     * Where the page’s type is a contact form: email address that receives messages sent via the form.
     */
    email?: string;
    /**
     * Page name, as displayed on the storefront.
     */
    name?: string;
    /**
     * Relative URL on the storefront for this page.
     */
    url?: string;
    /**
     * Description contained within this page’s `<meta/>` element.
     */
    meta_description?: string;
    /**
     * HTML or variable that populates this page’s `<body>` element, in default/desktop view. Required in POST if page type is `raw`.
     */
    body?: string;
    /**
     * HTML to use for this page's body when viewed in the mobile template (deprecated).
     */
    mobile_body?: string;
    /**
     * If true, this page has a mobile version.
     */
    has_mobile_version?: boolean;
    /**
     * If true, this page appears in the storefront’s navigation menu.
     */
    is_visible?: boolean;
    /**
     * If true, this page is the storefront’s home page.
     */
    is_homepage?: boolean;
    /**
     * Text specified for this page’s `<title>` element. (If empty, the value of the name property is used.)
     */
    meta_title?: string;
    /**
     * Layout template for this page. This field is writable only for stores with a Blueprint theme applied.
     */
    layout_file?: string;
    /**
     * Order in which this page should display on the storefront. (Lower integers specify earlier display.)
     */
    sort_order?: number;
    /**
     * Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
     */
    search_keywords?: string;
    /**
     * Comma-separated list of SEO-relevant keywords to include in the page’s `<meta/>` element.
     */
    meta_keywords?: string;
    /**
     * If page type is `rss_feed` then this field is visisble.
     */
    feed?: string;
    /**
     * If page type is `link` this field is returned.
     */
    link?: string;
    content_type?: page_Base_Res.content_type;
};

export namespace page_Base_Res {

    /**
     * `page`: free-text page
     * `link`: link to another web address
     * `rss_feed`: syndicated content from an RSS feed
     * `contact_form`: When the store's contact form is used.
     *
     *
     */
    export enum type {
        PAGE = 'page',
        RSS_FEED = 'rss_feed',
        CONTACT_FORM = 'contact_form',
        RAW = 'raw',
        LINK = 'link',
    }

    export enum content_type {
        APPLICATION_JSON = 'application/json',
        TEXT_JAVASCRIPT = 'text/javascript',
        TEXT_HTML = 'text/html',
    }


}

