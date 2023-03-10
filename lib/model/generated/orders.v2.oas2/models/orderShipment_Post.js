"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderShipment_Post = void 0;
var orderShipment_Post;
(function (orderShipment_Post) {
    /**
     * Enum of the BigCommerce shipping-carrier integration/module.
     */
    let shipping_provider;
    (function (shipping_provider) {
        shipping_provider["AUSPOST"] = "auspost";
        shipping_provider["CANADAPOST"] = "canadapost";
        shipping_provider["ENDICIA"] = "endicia";
        shipping_provider["USPS"] = "usps";
        shipping_provider["FEDEX"] = "fedex";
        shipping_provider["UPS"] = "ups";
        shipping_provider["UPSREADY"] = "upsready";
        shipping_provider["UPSONLINE"] = "upsonline";
        shipping_provider["SHIPPERHQ"] = "shipperhq";
    })(shipping_provider = orderShipment_Post.shipping_provider || (orderShipment_Post.shipping_provider = {}));
})(orderShipment_Post = exports.orderShipment_Post || (exports.orderShipment_Post = {}));
