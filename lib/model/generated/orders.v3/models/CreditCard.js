"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
var CreditCard;
(function (CreditCard) {
    /**
     * **Allowed values**: alelo, alia, american_express, cabal, carnet, dankort, diners_club, discover, elo, forbrugsforeningen, jcb, maestro, master, naranja, sodexo, unionpay, visa, vr
     */
    let card_type;
    (function (card_type) {
        card_type["ALELO"] = "alelo";
        card_type["ALIA"] = "alia";
        card_type["AMERICAN_EXPRESS"] = "american_express";
        card_type["CABAL"] = "cabal";
        card_type["CARNET"] = "carnet";
        card_type["DANKORT"] = "dankort";
        card_type["DINERS_CLUB"] = "diners_club";
        card_type["DISCOVER"] = "discover";
        card_type["ELO"] = "elo";
        card_type["FORBRUGSFORENINGEN"] = "forbrugsforeningen";
        card_type["JCB"] = "jcb";
        card_type["MAESTRO"] = "maestro";
        card_type["MASTER"] = "master";
        card_type["NARANJA"] = "naranja";
        card_type["SODEXO"] = "sodexo";
        card_type["UNIONPAY"] = "unionpay";
        card_type["VISA"] = "visa";
        card_type["VR"] = "vr";
    })(card_type = CreditCard.card_type || (CreditCard.card_type = {}));
})(CreditCard = exports.CreditCard || (exports.CreditCard = {}));
