"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Site = void 0;
var Site;
(function (Site) {
    /**
     * Indicates if a private/dedicated SSL is installed on this site, or if itʼs using shared SSL.
     */
    let ssl_status;
    (function (ssl_status) {
        ssl_status["DEDICATED"] = "dedicated";
        ssl_status["SHARED"] = "shared";
    })(ssl_status = Site.ssl_status || (Site.ssl_status = {}));
})(Site = exports.Site || (exports.Site = {}));
