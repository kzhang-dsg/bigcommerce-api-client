"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
var Url;
(function (Url) {
    /**
     * Specifies the URL type.
     */
    let type;
    (function (type) {
        type["PRIMARY"] = "primary";
        type["CANONICAL"] = "canonical";
        type["CHECKOUT"] = "checkout";
    })(type = Url.type || (Url.type = {}));
})(Url = exports.Url || (exports.Url = {}));
