"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.giftCertificate_Post = void 0;
var giftCertificate_Post;
(function (giftCertificate_Post) {
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
    })(template = giftCertificate_Post.template || (giftCertificate_Post.template = {}));
    let status;
    (function (status) {
        status["ACTIVE"] = "active";
        status["PENDING"] = "pending";
        status["EXPIRED"] = "expired";
        status["DISABLED"] = "disabled";
    })(status = giftCertificate_Post.status || (giftCertificate_Post.status = {}));
})(giftCertificate_Post = exports.giftCertificate_Post || (exports.giftCertificate_Post = {}));
