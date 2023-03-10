"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.page_Base_Res = void 0;
var page_Base_Res;
(function (page_Base_Res) {
    /**
     * `page`: free-text page
     * `link`: link to another web address
     * `rss_feed`: syndicated content from an RSS feed
     * `contact_form`: When the store's contact form is used.
     *
     *
     */
    let type;
    (function (type) {
        type["PAGE"] = "page";
        type["RSS_FEED"] = "rss_feed";
        type["CONTACT_FORM"] = "contact_form";
        type["RAW"] = "raw";
        type["LINK"] = "link";
    })(type = page_Base_Res.type || (page_Base_Res.type = {}));
    let content_type;
    (function (content_type) {
        content_type["APPLICATION_JSON"] = "application/json";
        content_type["TEXT_JAVASCRIPT"] = "text/javascript";
        content_type["TEXT_HTML"] = "text/html";
    })(content_type = page_Base_Res.content_type || (page_Base_Res.content_type = {}));
})(page_Base_Res = exports.page_Base_Res || (exports.page_Base_Res = {}));
