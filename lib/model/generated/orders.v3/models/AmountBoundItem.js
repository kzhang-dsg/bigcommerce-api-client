"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmountBoundItem = void 0;
var AmountBoundItem;
(function (AmountBoundItem) {
    /**
     * Type of refund.
     */
    let item_type;
    (function (item_type) {
        item_type["SHIPPING"] = "SHIPPING";
        item_type["HANDLING"] = "HANDLING";
    })(item_type = AmountBoundItem.item_type || (AmountBoundItem.item_type = {}));
})(AmountBoundItem = exports.AmountBoundItem || (exports.AmountBoundItem = {}));
