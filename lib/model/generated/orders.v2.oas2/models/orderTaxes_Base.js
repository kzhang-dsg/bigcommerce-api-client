"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderTaxes_Base = void 0;
var orderTaxes_Base;
(function (orderTaxes_Base) {
    /**
     * Type of tax on item.
     */
    let line_item_type;
    (function (line_item_type) {
        line_item_type["ITEM"] = "item";
        line_item_type["SHIPPING"] = "shipping";
        line_item_type["HANDLING"] = "handling";
        line_item_type["GIFT_WRAPPING"] = "gift-wrapping";
    })(line_item_type = orderTaxes_Base.line_item_type || (orderTaxes_Base.line_item_type = {}));
})(orderTaxes_Base = exports.orderTaxes_Base || (exports.orderTaxes_Base = {}));
