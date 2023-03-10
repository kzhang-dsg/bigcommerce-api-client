"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhichThemeToDownload = void 0;
var WhichThemeToDownload;
(function (WhichThemeToDownload) {
    /**
     * Which revision to use.
     */
    let which;
    (function (which) {
        which["ORIGINAL"] = "original";
        which["LAST_ACTIVATED"] = "last_activated";
        which["LAST_CREATED"] = "last_created";
    })(which = WhichThemeToDownload.which || (WhichThemeToDownload.which = {}));
})(WhichThemeToDownload = exports.WhichThemeToDownload || (exports.WhichThemeToDownload = {}));
