"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkPricingRuleFull_Response = void 0;
var bulkPricingRuleFull_Response;
(function (bulkPricingRuleFull_Response) {
    /**
     * The type of adjustment that is made. Values: `price` - the adjustment amount per product; `percent` - the adjustment as a percentage of the original price; `fixed` - the adjusted absolute price of the product.
     */
    let type;
    (function (type) {
        type["PRICE"] = "price";
        type["PERCENT"] = "percent";
        type["FIXED"] = "fixed";
    })(type = bulkPricingRuleFull_Response.type || (bulkPricingRuleFull_Response.type = {}));
})(bulkPricingRuleFull_Response = exports.bulkPricingRuleFull_Response || (exports.bulkPricingRuleFull_Response = {}));
