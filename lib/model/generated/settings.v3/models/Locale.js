"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = void 0;
var Locale;
(function (Locale) {
    /**
     * Determines whether to display the storefront content in the shopper's browser language or the shopper's selected default language.
     *
     * Available values:
     * * `browser` - language updates automatically based on the shopper browser language. Multiple languages are supported.
     * * `default_shopper_language` - content is displayed in a single language based on the set `default_shopper_language`. Only the selected language is supported.
     */
    let shopper_language_selection_method;
    (function (shopper_language_selection_method) {
        shopper_language_selection_method["BROWSER"] = "browser";
        shopper_language_selection_method["DEFAULT_SHOPPER_LANGUAGE"] = "default_shopper_language";
    })(shopper_language_selection_method = Locale.shopper_language_selection_method || (Locale.shopper_language_selection_method = {}));
})(Locale = exports.Locale || (exports.Locale = {}));
