"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkPricingTier = void 0;
var BulkPricingTier;
(function (BulkPricingTier) {
    /**
     * The type of adjustment that is made. Acceptable values: price – the adjustment amount per product; percent – the adjustment as a percentage of the original price; fixed – the adjusted absolute price of the product.
     *
     */
    let type;
    (function (type) {
        type["FIXED"] = "fixed";
        type["PRICE"] = "price";
        type["PERCENT"] = "percent";
    })(type = BulkPricingTier.type || (BulkPricingTier.type = {}));
})(BulkPricingTier = exports.BulkPricingTier || (exports.BulkPricingTier = {}));
