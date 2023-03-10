"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftCertificate_Full = void 0;
var giftCertificate_Full;
(function (giftCertificate_Full) {
    /**
     * The status of a gift certificate: `active` - gift certificate is active; `pending` - gift certificate purchase is pending; `disabled` - gift certificate is disabled; `expired` - gift certificate is expired.
     *
     */
    let status;
    (function (status) {
        status["ACTIVE"] = "active";
        status["PENDING"] = "pending";
        status["DISABLED"] = "disabled";
        status["EXPIRED"] = "expired";
    })(status = giftCertificate_Full.status || (giftCertificate_Full.status = {}));
})(giftCertificate_Full = exports.giftCertificate_Full || (exports.giftCertificate_Full = {}));
