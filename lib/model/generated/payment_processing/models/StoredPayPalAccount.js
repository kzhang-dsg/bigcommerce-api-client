"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredPayPalAccount = void 0;
var StoredPayPalAccount;
(function (StoredPayPalAccount) {
    /**
     * Type to classify this payment instrument (required)
     */
    let type;
    (function (type) {
        type["STORED_PAYPAL_ACCOUNT"] = "stored_paypal_account";
    })(type = StoredPayPalAccount.type || (StoredPayPalAccount.type = {}));
})(StoredPayPalAccount = exports.StoredPayPalAccount || (exports.StoredPayPalAccount = {}));
