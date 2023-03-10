"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.placement_Base = void 0;
var placement_Base;
(function (placement_Base) {
    /**
     * Sets the placement as either inactive or active.
     */
    let status;
    (function (status) {
        status["INACTIVE"] = "inactive";
        status["ACTIVE"] = "active";
    })(status = placement_Base.status || (placement_Base.status = {}));
})(placement_Base = exports.placement_Base || (exports.placement_Base = {}));
