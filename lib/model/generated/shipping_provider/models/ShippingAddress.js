"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingAddress = void 0;
var ShippingAddress;
(function (ShippingAddress) {
    /**
     * Optional. Defaults to `RESIDENTIAL`.
     */
    let address_type;
    (function (address_type) {
        address_type["RESIDENTIAL"] = "RESIDENTIAL";
        address_type["COMMERCIAL"] = "COMMERCIAL";
    })(address_type = ShippingAddress.address_type || (ShippingAddress.address_type = {}));
})(ShippingAddress = exports.ShippingAddress || (exports.ShippingAddress = {}));
