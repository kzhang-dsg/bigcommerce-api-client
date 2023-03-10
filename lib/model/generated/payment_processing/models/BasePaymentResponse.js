"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePaymentResponse = void 0;
var BasePaymentResponse;
(function (BasePaymentResponse) {
    /**
     * Transaction type for this payment
     */
    let transaction_type;
    (function (transaction_type) {
        transaction_type["AUTHORIZATION"] = "authorization";
        transaction_type["PURCHASE"] = "purchase";
    })(transaction_type = BasePaymentResponse.transaction_type || (BasePaymentResponse.transaction_type = {}));
})(BasePaymentResponse = exports.BasePaymentResponse || (exports.BasePaymentResponse = {}));
