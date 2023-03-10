"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.siteRoutes_Route_Base = void 0;
var siteRoutes_Route_Base;
(function (siteRoutes_Route_Base) {
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
    })(type = siteRoutes_Route_Base.type || (siteRoutes_Route_Base.type = {}));
})(siteRoutes_Route_Base = exports.siteRoutes_Route_Base || (exports.siteRoutes_Route_Base = {}));
