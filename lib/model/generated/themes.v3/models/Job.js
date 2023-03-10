"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
var Job;
(function (Job) {
    /**
     * The status.
     */
    let status;
    (function (status) {
        status["COMPLETED"] = "COMPLETED";
        status["QUEUED"] = "QUEUED";
        status["WORKING"] = "WORKING";
        status["FAILED"] = "FAILED";
    })(status = Job.status || (Job.status = {}));
})(Job = exports.Job || (exports.Job = {}));
