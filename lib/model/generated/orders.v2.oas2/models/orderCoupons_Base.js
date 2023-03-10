"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderCoupons_Base = void 0;
var orderCoupons_Base;
(function (orderCoupons_Base) {
    /**
     * 0: per_item_discount
     * 1: percentage_discount
     * 2: per_total_discount
     * 3: shipping_discount
     * 4: free_shipping
     * 5: promotions
     */
    let type;
    (function (type) {
        type[type["_0"] = 0] = "_0";
        type[type["_1"] = 1] = "_1";
        type[type["_2"] = 2] = "_2";
        type[type["_3"] = 3] = "_3";
        type[type["_4"] = 4] = "_4";
        type[type["_5"] = 5] = "_5";
    })(type = orderCoupons_Base.type || (orderCoupons_Base.type = {}));
})(orderCoupons_Base = exports.orderCoupons_Base || (exports.orderCoupons_Base = {}));
