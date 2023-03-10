"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnabledProductFilter = void 0;
var EnabledProductFilter;
(function (EnabledProductFilter) {
    let items_to_show;
    (function (items_to_show) {
        items_to_show[items_to_show["_5"] = 5] = "_5";
        items_to_show[items_to_show["_10"] = 10] = "_10";
        items_to_show[items_to_show["_15"] = 15] = "_15";
    })(items_to_show = EnabledProductFilter.items_to_show || (EnabledProductFilter.items_to_show = {}));
    let sort_by;
    (function (sort_by) {
        sort_by["ALPHA"] = "alpha";
        sort_by["OPTION_VALUES"] = "option_values";
        sort_by["ITEM_COUNT"] = "item_count";
    })(sort_by = EnabledProductFilter.sort_by || (EnabledProductFilter.sort_by = {}));
    let type;
    (function (type) {
        type["PRODUCT"] = "product";
    })(type = EnabledProductFilter.type || (EnabledProductFilter.type = {}));
})(EnabledProductFilter = exports.EnabledProductFilter || (exports.EnabledProductFilter = {}));
