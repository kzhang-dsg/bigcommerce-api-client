"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.banner_Base = void 0;
var banner_Base;
(function (banner_Base) {
    /**
     * Page the Banner is located on.
     */
    let page;
    (function (page) {
        page["HOME_PAGE"] = "home_page";
        page["CATEGORY_PAGE"] = "category_page";
        page["BRAND_PAGE"] = "brand_page";
        page["SEARCH_PAGE"] = "search_page";
    })(page = banner_Base.page || (banner_Base.page = {}));
    /**
     * Location on the page.
     */
    let location;
    (function (location) {
        location["TOP"] = "top";
        location["BOTTOM"] = "bottom";
    })(location = banner_Base.location || (banner_Base.location = {}));
    /**
     * This specifies whether the banner should be visible during a specific date range.
     */
    let date_type;
    (function (date_type) {
        date_type["ALWAYS"] = "always";
        date_type["CUSTOM"] = "custom";
    })(date_type = banner_Base.date_type || (banner_Base.date_type = {}));
})(banner_Base = exports.banner_Base || (exports.banner_Base = {}));
