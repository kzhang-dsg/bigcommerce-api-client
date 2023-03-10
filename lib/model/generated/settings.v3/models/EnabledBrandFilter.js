"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnabledBrandFilter = void 0;
var EnabledBrandFilter;
(function (EnabledBrandFilter) {
    let items_to_show;
    (function (items_to_show) {
        items_to_show[items_to_show["_5"] = 5] = "_5";
        items_to_show[items_to_show["_10"] = 10] = "_10";
        items_to_show[items_to_show["_15"] = 15] = "_15";
    })(items_to_show = EnabledBrandFilter.items_to_show || (EnabledBrandFilter.items_to_show = {}));
    let sort_by;
    (function (sort_by) {
        sort_by["ALPHA"] = "alpha";
        sort_by["ITEM_COUNT"] = "item_count";
    })(sort_by = EnabledBrandFilter.sort_by || (EnabledBrandFilter.sort_by = {}));
    let type;
    (function (type) {
        type["BRAND"] = "brand";
    })(type = EnabledBrandFilter.type || (EnabledBrandFilter.type = {}));
})(EnabledBrandFilter = exports.EnabledBrandFilter || (exports.EnabledBrandFilter = {}));
