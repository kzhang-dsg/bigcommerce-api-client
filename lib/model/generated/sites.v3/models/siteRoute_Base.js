"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteRoute_Base = void 0;
var siteRoute_Base;
(function (siteRoute_Base) {
    /**
     * The type of resource being routed to; [supported types](/docs/rest-management/sites#route-types).
     */
    let type;
    (function (type) {
        type["PRODUCT"] = "product";
        type["BRAND"] = "brand";
        type["CATEGORY"] = "category";
        type["PAGE"] = "page";
        type["BLOG"] = "blog";
        type["HOME"] = "home";
        type["CART"] = "cart";
        type["CHECKOUT"] = "checkout";
        type["SEARCH"] = "search";
        type["ACCOUNT"] = "account";
        type["LOGIN"] = "login";
        type["RETURNS"] = "returns";
        type["STATIC"] = "static";
    })(type = siteRoute_Base.type || (siteRoute_Base.type = {}));
})(siteRoute_Base = exports.siteRoute_Base || (exports.siteRoute_Base = {}));
