"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartUpdateRequest = void 0;
var CartUpdateRequest;
(function (CartUpdateRequest) {
    /**
     * The theme of the gift certificate.
     */
    let theme;
    (function (theme) {
        theme["BIRTHDAY"] = "Birthday";
        theme["BOY"] = "Boy";
        theme["CELEBRATION"] = "Celebration";
        theme["CHRISTMAS"] = "Christmas";
        theme["GENERAL"] = "General";
        theme["GIRL"] = "Girl";
    })(theme = CartUpdateRequest.theme || (CartUpdateRequest.theme = {}));
})(CartUpdateRequest = exports.CartUpdateRequest || (exports.CartUpdateRequest = {}));
