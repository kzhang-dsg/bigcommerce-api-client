"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.request_item = void 0;
var request_item;
(function (request_item) {
    /**
     * The type of line item this request represents. This will depend on the item’s position in the request hierarchy. For example, the document request contains a collection of items (which may or may not also have wrapping attached). In addition, each document request also has a shipping line item and handling line item.
     *
     * The type refund is used when the tax estimate request is for an order-level refund.
     */
    let type;
    (function (type) {
        type["ITEM"] = "item";
        type["WRAPPING"] = "wrapping";
        type["HANDLING"] = "handling";
        type["SHIPPING"] = "shipping";
        type["REFUND"] = "refund";
    })(type = request_item.type || (request_item.type = {}));
})(request_item = exports.request_item || (exports.request_item = {}));
