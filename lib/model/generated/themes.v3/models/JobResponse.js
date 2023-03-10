"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobResponse = void 0;
var JobResponse;
(function (JobResponse) {
    /**
     * The status.
     */
    let status;
    (function (status) {
        status["COMPLETED"] = "COMPLETED";
        status["QUEUED"] = "QUEUED";
        status["WORKING"] = "WORKING";
        status["FAILED"] = "FAILED";
    })(status = JobResponse.status || (JobResponse.status = {}));
})(JobResponse = exports.JobResponse || (exports.JobResponse = {}));
