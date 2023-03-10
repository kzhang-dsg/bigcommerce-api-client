"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftCertificate_Full = void 0;
var giftCertificate_Full;
(function (giftCertificate_Full) {
    /**
     * The email theme to use in the message sent to the recipient.
     */
    let template;
    (function (template) {
        template["BIRTHDAY"] = "Birthday";
        template["GIRL"] = "Girl";
        template["BOY"] = "Boy";
        template["CELEBRATION"] = "Celebration";
        template["CHRISTMAS"] = "Christmas";
        template["GENERAL"] = "General";
    })(template = giftCertificate_Full.template || (giftCertificate_Full.template = {}));
    let status;
    (function (status) {
        status["ACTIVE"] = "active";
        status["PENDING"] = "pending";
        status["DISABLED"] = "disabled";
        status["EXPIRED"] = "expired";
    })(status = giftCertificate_Full.status || (giftCertificate_Full.status = {}));
})(giftCertificate_Full = exports.giftCertificate_Full || (exports.giftCertificate_Full = {}));
