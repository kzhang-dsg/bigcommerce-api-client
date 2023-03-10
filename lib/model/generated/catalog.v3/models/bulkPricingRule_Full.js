"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkPricingRule_Full = void 0;
var bulkPricingRule_Full;
(function (bulkPricingRule_Full) {
    /**
     * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product.
     * Required in /POST.
     */
    let type;
    (function (type) {
        type["PRICE"] = "price";
        type["PERCENT"] = "percent";
        type["FIXED"] = "fixed";
    })(type = bulkPricingRule_Full.type || (bulkPricingRule_Full.type = {}));
})(bulkPricingRule_Full = exports.bulkPricingRule_Full || (exports.bulkPricingRule_Full = {}));
