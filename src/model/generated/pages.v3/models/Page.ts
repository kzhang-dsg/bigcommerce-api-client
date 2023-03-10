/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageBase } from './PageBase';

export type Page = ({
    /**
     * Applicable when the page type is `contact_form`: contact email address that receives messages sent via the form. Must be unique.
     */
    email?: string;
    meta_title?: string | null;
    /**
     * HTML or variable that populates this page’s element, in default/desktop view. Required in a `POST` request if the page type is `raw`.
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
     * Comma-separated list of SEO-relevant keywords to include in the page’s element.
     *
     */
    meta_keywords?: string | null;
    /**
     * Description contained within this page’s element.
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
     * The Id of the channel where this page should be shown.
     *
     */
    channel_id?: number;
} & PageBase);

