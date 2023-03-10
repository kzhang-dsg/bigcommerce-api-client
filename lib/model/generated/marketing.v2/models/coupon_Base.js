"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.coupon_Base = void 0;
var coupon_Base;
(function (coupon_Base) {
    let type;
    (function (type) {
        type["PER_ITEM_DISCOUNT"] = "per_item_discount";
        type["PER_TOTAL_DISCOUNT"] = "per_total_discount";
        type["SHIPPING_DISCOUNT"] = "shipping_discount";
        type["FREE_SHIPPING"] = "free_shipping";
        type["PERCENTAGE_DISCOUNT"] = "percentage_discount";
        type["PROMOTION"] = "promotion";
    })(type = coupon_Base.type || (coupon_Base.type = {}));
})(coupon_Base = exports.coupon_Base || (exports.coupon_Base = {}));
