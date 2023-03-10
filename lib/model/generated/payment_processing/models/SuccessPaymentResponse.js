"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessPaymentResponse = void 0;
var SuccessPaymentResponse;
(function (SuccessPaymentResponse) {
    /**
     * Transaction type for this payment
     */
    let transaction_type;
    (function (transaction_type) {
        transaction_type["AUTHORIZATION"] = "authorization";
        transaction_type["PURCHASE"] = "purchase";
    })(transaction_type = SuccessPaymentResponse.transaction_type || (SuccessPaymentResponse.transaction_type = {}));
    /**
     * Status to indicate a success response
     */
    let status;
    (function (status) {
        status["SUCCESS"] = "success";
        status["PENDING"] = "pending";
    })(status = SuccessPaymentResponse.status || (SuccessPaymentResponse.status = {}));
})(SuccessPaymentResponse = exports.SuccessPaymentResponse || (exports.SuccessPaymentResponse = {}));
