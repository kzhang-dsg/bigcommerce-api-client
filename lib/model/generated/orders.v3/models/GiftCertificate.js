"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCertificate = void 0;
var GiftCertificate;
(function (GiftCertificate) {
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
    })(status = GiftCertificate.status || (GiftCertificate.status = {}));
})(GiftCertificate = exports.GiftCertificate || (exports.GiftCertificate = {}));
