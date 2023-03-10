"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingState = void 0;
/**
 * The state of the product assignment or channel listing.
 */
var ListingState;
(function (ListingState) {
    ListingState["ACTIVE"] = "active";
    ListingState["DISABLED"] = "disabled";
    ListingState["ERROR"] = "error";
    ListingState["PENDING"] = "pending";
    ListingState["PENDING_DISABLE"] = "pending_disable";
    ListingState["PENDING_DELETE"] = "pending_delete";
    ListingState["PARTIALLY_REJECTED"] = "partially_rejected";
    ListingState["QUEUED"] = "queued";
    ListingState["REJECTED"] = "rejected";
    ListingState["SUBMITTED"] = "submitted";
    ListingState["DELETED"] = "deleted";
})(ListingState = exports.ListingState || (exports.ListingState = {}));
