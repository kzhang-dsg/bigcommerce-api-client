"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityBoundItem = void 0;
var QuantityBoundItem;
(function (QuantityBoundItem) {
    /**
     * Type of refund.
     */
    let item_type;
    (function (item_type) {
        item_type["ORDER"] = "ORDER";
        item_type["PRODUCT"] = "PRODUCT";
        item_type["SHIPPING"] = "SHIPPING";
        item_type["HANDLING"] = "HANDLING";
    })(item_type = QuantityBoundItem.item_type || (QuantityBoundItem.item_type = {}));
})(QuantityBoundItem = exports.QuantityBoundItem || (exports.QuantityBoundItem = {}));
