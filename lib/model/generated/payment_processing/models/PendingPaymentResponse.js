"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingPaymentResponse = void 0;
var PendingPaymentResponse;
(function (PendingPaymentResponse) {
    /**
     * Transaction type for this payment
     */
    let transaction_type;
    (function (transaction_type) {
        transaction_type["AUTHORIZATION"] = "authorization";
        transaction_type["PURCHASE"] = "purchase";
    })(transaction_type = PendingPaymentResponse.transaction_type || (PendingPaymentResponse.transaction_type = {}));
    /**
     * Status to indicate a success response
     */
    let status;
    (function (status) {
        status["SUCCESS"] = "success";
        status["PENDING"] = "pending";
    })(status = PendingPaymentResponse.status || (PendingPaymentResponse.status = {}));
})(PendingPaymentResponse = exports.PendingPaymentResponse || (exports.PendingPaymentResponse = {}));
