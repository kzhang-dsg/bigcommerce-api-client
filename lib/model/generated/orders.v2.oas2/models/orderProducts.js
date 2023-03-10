"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProducts = void 0;
var orderProducts;
(function (orderProducts) {
    /**
     * Type of product.
     */
    let type;
    (function (type) {
        type["PHYSICAL"] = "physical";
        type["DIGITAL"] = "digital";
    })(type = orderProducts.type || (orderProducts.type = {}));
})(orderProducts = exports.orderProducts || (exports.orderProducts = {}));
