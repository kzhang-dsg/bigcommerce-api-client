"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportedCardInstrument = void 0;
var SupportedCardInstrument;
(function (SupportedCardInstrument) {
    /**
     * Type of this instrument
     */
    let instrument_type;
    (function (instrument_type) {
        instrument_type["VISA"] = "VISA";
        instrument_type["MASTERCARD"] = "MASTERCARD";
        instrument_type["DISCOVER"] = "DISCOVER";
        instrument_type["AMEX"] = "AMEX";
        instrument_type["DINERS_CLUB"] = "DINERS_CLUB";
        instrument_type["JCB"] = "JCB";
        instrument_type["DANKORT"] = "DANKORT";
        instrument_type["MAESTRO"] = "MAESTRO";
        instrument_type["STORED_CARD"] = "STORED_CARD";
    })(instrument_type = SupportedCardInstrument.instrument_type || (SupportedCardInstrument.instrument_type = {}));
})(SupportedCardInstrument = exports.SupportedCardInstrument || (exports.SupportedCardInstrument = {}));
