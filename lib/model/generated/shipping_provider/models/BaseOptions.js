"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOptions = void 0;
var BaseOptions;
(function (BaseOptions) {
    /**
     * Optional. Defaults to `RESIDENTIAL`.
     */
    let address_type;
    (function (address_type) {
        address_type["RESIDENTIAL"] = "RESIDENTIAL";
        address_type["COMMERCIAL"] = "COMMERCIAL";
    })(address_type = BaseOptions.address_type || (BaseOptions.address_type = {}));
})(BaseOptions = exports.BaseOptions || (exports.BaseOptions = {}));
