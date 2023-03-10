"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartCoupon = void 0;
var CartCoupon;
(function (CartCoupon) {
    /**
     * Key name to identify the type of coupon.
     */
    let couponType;
    (function (couponType) {
        couponType["PER_ITEM_DISCOUNT"] = "per_item_discount";
        couponType["PERCENTAGE_DISCOUNT"] = "percentage_discount";
        couponType["PER_TOTAL_DISCOUNT"] = "per_total_discount";
        couponType["SHIPPING_DISCOUNT"] = "shipping_discount";
        couponType["FREE_SHIPPING"] = "free_shipping";
        couponType["PROMOTION"] = "promotion";
    })(couponType = CartCoupon.couponType || (CartCoupon.couponType = {}));
})(CartCoupon = exports.CartCoupon || (exports.CartCoupon = {}));
