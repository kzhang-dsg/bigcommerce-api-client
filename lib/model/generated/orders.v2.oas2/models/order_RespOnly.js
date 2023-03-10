"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_RespOnly = void 0;
var order_RespOnly;
(function (order_RespOnly) {
    /**
     * A read-only value. Do not attempt to set or modify this value in a POST or PUT request.
     */
    let payment_status;
    (function (payment_status) {
        payment_status["AUTHORIZED"] = "authorized";
        payment_status["CAPTURED"] = "captured";
        payment_status["CAPTURE_PENDING"] = "capture pending";
        payment_status["DECLINED"] = "declined";
        payment_status["HELD_FOR_REVIEW"] = "held for review";
        payment_status["PAID"] = "paid";
        payment_status["PARTIALLY_REFUNDED"] = "partially refunded";
        payment_status["PENDING"] = "pending";
        payment_status["REFUNDED"] = "refunded";
        payment_status["VOID"] = "void";
        payment_status["VOID_PENDING"] = "void pending";
    })(payment_status = order_RespOnly.payment_status || (order_RespOnly.payment_status = {}));
})(order_RespOnly = exports.order_RespOnly || (exports.order_RespOnly = {}));
