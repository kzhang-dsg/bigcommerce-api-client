"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryAccessLevel = void 0;
var categoryAccessLevel;
(function (categoryAccessLevel) {
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
    })(type = categoryAccessLevel.type || (categoryAccessLevel.type = {}));
})(categoryAccessLevel = exports.categoryAccessLevel || (exports.categoryAccessLevel = {}));
