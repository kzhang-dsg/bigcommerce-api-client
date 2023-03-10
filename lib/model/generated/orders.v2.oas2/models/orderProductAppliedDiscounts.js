"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProductAppliedDiscounts = void 0;
var orderProductAppliedDiscounts;
(function (orderProductAppliedDiscounts) {
    /**
     * Determines if the discount if discount was applied at the Order or Product level. Read Only.
     */
    let target;
    (function (target) {
        target["ORDER"] = "order";
        target["PRODUCT"] = "product";
    })(target = orderProductAppliedDiscounts.target || (orderProductAppliedDiscounts.target = {}));
})(orderProductAppliedDiscounts = exports.orderProductAppliedDiscounts || (exports.orderProductAppliedDiscounts = {}));
