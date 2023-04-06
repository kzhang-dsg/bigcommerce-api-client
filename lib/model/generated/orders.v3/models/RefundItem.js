"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundItem = void 0;
var RefundItem;
(function (RefundItem) {
    /**
     * Type of item that was refunded.
     */
    let item_type;
    (function (item_type) {
        item_type["PRODUCT"] = "PRODUCT";
        item_type["GIFT_WRAPPING"] = "GIFT_WRAPPING";
        item_type["SHIPPING"] = "SHIPPING";
        item_type["HANDLING"] = "HANDLING";
        item_type["ORDER"] = "ORDER";
    })(item_type = RefundItem.item_type || (RefundItem.item_type = {}));
})(RefundItem = exports.RefundItem || (exports.RefundItem = {}));
