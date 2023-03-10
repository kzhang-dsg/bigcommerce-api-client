"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyTypePage = void 0;
var anyTypePage;
(function (anyTypePage) {
    /**
     * Determines the type of page. See [Pages v3 page types](/docs/rest-content/pages#page-types) for more about the differences.
     */
    let type;
    (function (type) {
        type["PAGE"] = "page";
        type["RAW"] = "raw";
        type["CONTACT_FORM"] = "contact_form";
        type["FEED"] = "feed";
        type["LINK"] = "link";
        type["BLOG"] = "blog";
    })(type = anyTypePage.type || (anyTypePage.type = {}));
})(anyTypePage = exports.anyTypePage || (exports.anyTypePage = {}));
