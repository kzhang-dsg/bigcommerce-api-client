"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
/**
 * Order status.
 */
var Status;
(function (Status) {
    Status["INCOMPLETE"] = "INCOMPLETE";
    Status["PENDING"] = "PENDING";
    Status["SHIPPED"] = "SHIPPED";
    Status["PARTIALLY_SHIPPED"] = "PARTIALLY_SHIPPED";
    Status["REFUNDED"] = "REFUNDED";
    Status["CANCELLED"] = "CANCELLED";
    Status["DECLINED"] = "DECLINED";
    Status["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    Status["AWAITING_PICKUP"] = "AWAITING_PICKUP";
    Status["AWAITING_SHIPMENT"] = "AWAITING_SHIPMENT";
    Status["COMPLETED"] = "COMPLETED";
    Status["AWAITING_FULFILLMENT"] = "AWAITING_FULFILLMENT";
    Status["MANUAL_VERIFICATION_REQUIRED"] = "MANUAL_VERIFICATION_REQUIRED";
    Status["DISPUTED"] = "DISPUTED";
    Status["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
})(Status = exports.Status || (exports.Status = {}));
