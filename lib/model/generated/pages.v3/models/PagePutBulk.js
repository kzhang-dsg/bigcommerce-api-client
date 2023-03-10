"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagePutBulk = void 0;
var PagePutBulk;
(function (PagePutBulk) {
    /**
     * Specifies the type of the page. The following values are possible;
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
    let type;
    (function (type) {
        type["PAGE"] = "page";
        type["RAW"] = "raw";
        type["CONTACT_FORM"] = "contact_form";
        type["FEED"] = "feed";
        type["LINK"] = "link";
        type["BLOG"] = "blog";
    })(type = PagePutBulk.type || (PagePutBulk.type = {}));
})(PagePutBulk = exports.PagePutBulk || (exports.PagePutBulk = {}));
