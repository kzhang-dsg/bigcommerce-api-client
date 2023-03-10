"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_Shared = void 0;
var order_Shared;
(function (order_Shared) {
    /**
     * The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `cash`, `Test Payment Gateway`, etc.
     */
    let payment_method;
    (function (payment_method) {
        payment_method["CREDIT_CARD"] = "Credit Card";
        payment_method["CASH"] = "Cash";
        payment_method["TEST_PAYMENT_GATEWAY"] = "Test Payment Gateway";
        payment_method["MANUAL"] = "Manual";
    })(payment_method = order_Shared.payment_method || (order_Shared.payment_method = {}));
    /**
     * BasicTaxProvider - Tax is set to manual and order is created in the store.
     *
     * AvaTaxProvider - Tax is set to automatic and order is created in the store. Used for Avalara.
     *
     * "" (empty string) - The order is created with the API, or the tax provider is unknown.
     *
     */
    let tax_provider_id;
    (function (tax_provider_id) {
        tax_provider_id["BASIC_TAX_PROVIDER"] = "BasicTaxProvider";
        tax_provider_id["AVA_TAX_PROVIDER"] = "AvaTaxProvider";
        tax_provider_id["BLANK"] = "";
    })(tax_provider_id = order_Shared.tax_provider_id || (order_Shared.tax_provider_id = {}));
})(order_Shared = exports.order_Shared || (exports.order_Shared = {}));
