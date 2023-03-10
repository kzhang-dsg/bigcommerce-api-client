"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValuePairSchema = void 0;
var KeyValuePairSchema;
(function (KeyValuePairSchema) {
    /**
     * How this input will be displayed.
     */
    let type;
    (function (type) {
        type["DATE"] = "date";
        type["STRING"] = "string";
        type["SELECT"] = "select";
        type["CODE"] = "code";
    })(type = KeyValuePairSchema.type || (KeyValuePairSchema.type = {}));
})(KeyValuePairSchema = exports.KeyValuePairSchema || (exports.KeyValuePairSchema = {}));
