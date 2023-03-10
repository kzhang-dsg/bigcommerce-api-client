"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelAbandonedCartSettings = void 0;
var ChannelAbandonedCartSettings;
(function (ChannelAbandonedCartSettings) {
    /**
     * Indicates whether to send an email for every abandoned cart or to send a digest email after X number of abandoned carts. If it is null, it means there is no override for the specified channel.
     */
    let merchant_abandoned_cart_email_frequency_type;
    (function (merchant_abandoned_cart_email_frequency_type) {
        merchant_abandoned_cart_email_frequency_type["DIGEST"] = "digest";
        merchant_abandoned_cart_email_frequency_type["INDIVIDUAL"] = "individual";
    })(merchant_abandoned_cart_email_frequency_type = ChannelAbandonedCartSettings.merchant_abandoned_cart_email_frequency_type || (ChannelAbandonedCartSettings.merchant_abandoned_cart_email_frequency_type = {}));
})(ChannelAbandonedCartSettings = exports.ChannelAbandonedCartSettings || (exports.ChannelAbandonedCartSettings = {}));
