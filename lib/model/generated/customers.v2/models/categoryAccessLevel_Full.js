"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryAccessLevel_Full = void 0;
var categoryAccessLevel_Full;
(function (categoryAccessLevel_Full) {
    /**
     * + `all` - Customers can access all categories
     * + `specific`  - Customers can access a specific list of categories
     * + `none` - Customers are prevented from viewing any of the categories in this group.
     */
    let type;
    (function (type) {
        type["ALL"] = "all";
        type["SPECIFIC"] = "specific";
        type["NONE"] = "none";
    })(type = categoryAccessLevel_Full.type || (categoryAccessLevel_Full.type = {}));
})(categoryAccessLevel_Full = exports.categoryAccessLevel_Full || (exports.categoryAccessLevel_Full = {}));
