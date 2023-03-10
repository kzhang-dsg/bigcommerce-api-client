"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxExemptItem = void 0;
var TaxExemptItem;
(function (TaxExemptItem) {
    /**
     * The type of refund. When `item_type` is set to `ORDER`, tax is not re-calculated.
     */
    let item_type;
    (function (item_type) {
        item_type["ORDER"] = "ORDER";
    })(item_type = TaxExemptItem.item_type || (TaxExemptItem.item_type = {}));
})(TaxExemptItem = exports.TaxExemptItem || (exports.TaxExemptItem = {}));
