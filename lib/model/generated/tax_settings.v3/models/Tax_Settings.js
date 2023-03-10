"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_Settings = void 0;
var Tax_Settings;
(function (Tax_Settings) {
    /**
     * Whether to show prices as tax inclusive or tax exclusive across all invoices, or use the shopperʼs tax zone for price display on invoices.
     */
    let invoice_price_display_strategy;
    (function (invoice_price_display_strategy) {
        invoice_price_display_strategy["ZONE"] = "ZONE";
        invoice_price_display_strategy["INCLUSIVE"] = "INCLUSIVE";
        invoice_price_display_strategy["EXCLUSIVE"] = "EXCLUSIVE";
    })(invoice_price_display_strategy = Tax_Settings.invoice_price_display_strategy || (Tax_Settings.invoice_price_display_strategy = {}));
    /**
     * Describes the fallback behavior that applies when a tax provider produces an error. A merchant may decide to use a flat 10% fallback tax rate, their basic tax settings, or to block the transaction until they achieve a successful result.
     */
    let fallback_strategy;
    (function (fallback_strategy) {
        fallback_strategy["FIXED"] = "FIXED";
        fallback_strategy["BASIC"] = "BASIC";
        fallback_strategy["DISABLE"] = "DISABLE";
    })(fallback_strategy = Tax_Settings.fallback_strategy || (Tax_Settings.fallback_strategy = {}));
})(Tax_Settings = exports.Tax_Settings || (exports.Tax_Settings = {}));
