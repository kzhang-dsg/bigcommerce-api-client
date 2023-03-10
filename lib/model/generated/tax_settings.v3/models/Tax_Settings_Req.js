"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_Settings_Req = void 0;
var Tax_Settings_Req;
(function (Tax_Settings_Req) {
    /**
     * Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopper's tax zone for price display on invoices.
     */
    let invoice_price_display_strategy;
    (function (invoice_price_display_strategy) {
        invoice_price_display_strategy["ZONE"] = "ZONE";
        invoice_price_display_strategy["INCLUSIVE"] = "INCLUSIVE";
        invoice_price_display_strategy["EXCLUSIVE"] = "EXCLUSIVE";
    })(invoice_price_display_strategy = Tax_Settings_Req.invoice_price_display_strategy || (Tax_Settings_Req.invoice_price_display_strategy = {}));
    /**
     * Decribes the fallback behaviour that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until a successful result can be achieved.
     */
    let fallback_strategy;
    (function (fallback_strategy) {
        fallback_strategy["FIXED"] = "FIXED";
        fallback_strategy["BASIC"] = "BASIC";
        fallback_strategy["DISABLE"] = "DISABLE";
    })(fallback_strategy = Tax_Settings_Req.fallback_strategy || (Tax_Settings_Req.fallback_strategy = {}));
})(Tax_Settings_Req = exports.Tax_Settings_Req || (exports.Tax_Settings_Req = {}));
