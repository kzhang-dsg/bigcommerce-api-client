"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkPricingTier = void 0;
var BulkPricingTier;
(function (BulkPricingTier) {
    let discount_type;
    (function (discount_type) {
        discount_type["PRICE"] = "price";
        discount_type["PERCENT"] = "percent";
        discount_type["FIXED"] = "fixed";
    })(discount_type = BulkPricingTier.discount_type || (BulkPricingTier.discount_type = {}));
})(BulkPricingTier = exports.BulkPricingTier || (exports.BulkPricingTier = {}));
