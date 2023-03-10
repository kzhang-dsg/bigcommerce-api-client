"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftCertificate_Put = void 0;
var giftCertificate_Put;
(function (giftCertificate_Put) {
    /**
     * The email theme to use in the message sent to the recipient.
     */
    let template;
    (function (template) {
        template["BIRTHDAY"] = "Birthday";
        template["BOY"] = "Boy";
        template["GIRL"] = "Girl";
        template["CELEBRATION"] = "Celebration";
        template["CHRISTMAS"] = "Christmas";
        template["GENERAL"] = "General";
    })(template = giftCertificate_Put.template || (giftCertificate_Put.template = {}));
    let status;
    (function (status) {
        status["ACTIVE"] = "active";
        status["PENDING"] = "pending";
        status["EXPIRED"] = "expired";
        status["DISABLED"] = "disabled";
    })(status = giftCertificate_Put.status || (giftCertificate_Put.status = {}));
})(giftCertificate_Put = exports.giftCertificate_Put || (exports.giftCertificate_Put = {}));
