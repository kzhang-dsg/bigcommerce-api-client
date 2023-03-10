"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbandonedCartSettings = void 0;
var AbandonedCartSettings;
(function (AbandonedCartSettings) {
    /**
     * Indicates whether to send an email for every abandoned cart, or to send a digest email after X number of abandoned carts
     */
    let merchant_abandoned_cart_email_frequency_type;
    (function (merchant_abandoned_cart_email_frequency_type) {
        merchant_abandoned_cart_email_frequency_type["DIGEST"] = "digest";
        merchant_abandoned_cart_email_frequency_type["INDIVIDUAL"] = "individual";
    })(merchant_abandoned_cart_email_frequency_type = AbandonedCartSettings.merchant_abandoned_cart_email_frequency_type || (AbandonedCartSettings.merchant_abandoned_cart_email_frequency_type = {}));
})(AbandonedCartSettings = exports.AbandonedCartSettings || (exports.AbandonedCartSettings = {}));
