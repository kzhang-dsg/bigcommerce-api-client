"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppliedCoupon = void 0;
var AppliedCoupon;
(function (AppliedCoupon) {
    /**
     * Key name to identify the type of coupon.
     *
     * type 0: per_item_discount
     * type 1: percentage_discount
     * type 2: per_total_discount
     * type 3: shipping_discount
     * type 4: free_shipping
     * type 5: promotion
     */
    let coupon_type;
    (function (coupon_type) {
        coupon_type["_0"] = "0";
        coupon_type["_1"] = "1";
        coupon_type["_2"] = "2";
        coupon_type["_3"] = "3";
        coupon_type["_4"] = "4";
        coupon_type["_5"] = "5";
    })(coupon_type = AppliedCoupon.coupon_type || (AppliedCoupon.coupon_type = {}));
})(AppliedCoupon = exports.AppliedCoupon || (exports.AppliedCoupon = {}));
