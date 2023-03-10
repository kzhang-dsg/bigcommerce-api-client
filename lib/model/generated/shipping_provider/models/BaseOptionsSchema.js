"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseOptionsSchema = void 0;
var BaseOptionsSchema;
(function (BaseOptionsSchema) {
    /**
     * Optional. Defaults to `RESIDENTIAL`.
     */
    let address_type;
    (function (address_type) {
        address_type["RESIDENTIAL"] = "RESIDENTIAL";
        address_type["COMMERCIAL"] = "COMMERCIAL";
    })(address_type = BaseOptionsSchema.address_type || (BaseOptionsSchema.address_type = {}));
})(BaseOptionsSchema = exports.BaseOptionsSchema || (exports.BaseOptionsSchema = {}));
