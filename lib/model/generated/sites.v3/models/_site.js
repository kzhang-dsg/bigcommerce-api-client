"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports._site = void 0;
var _site;
(function (_site) {
    /**
     * Indicates whether a site is using a private/dedicated SSL or a shared SSL.
     */
    let ssl_status;
    (function (ssl_status) {
        ssl_status["DEDICATED"] = "dedicated";
        ssl_status["SHARED"] = "shared";
    })(ssl_status = _site.ssl_status || (_site.ssl_status = {}));
})(_site = exports._site || (exports._site = {}));
