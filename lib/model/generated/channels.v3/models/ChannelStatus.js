"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelStatus = void 0;
/**
 * The status of the channel; channel `type`, `platform`, and `status` must be a [valid combination](/docs/rest-management/channels#status). `terminated` is not valid for `PUT` or `POST` requests. `deleted` is not valid for `POST` requests.
 */
var ChannelStatus;
(function (ChannelStatus) {
    ChannelStatus["ACTIVE"] = "active";
    ChannelStatus["PRELAUNCH"] = "prelaunch";
    ChannelStatus["INACTIVE"] = "inactive";
    ChannelStatus["CONNECTED"] = "connected";
    ChannelStatus["DISCONNECTED"] = "disconnected";
    ChannelStatus["ARCHIVED"] = "archived";
    ChannelStatus["DELETED"] = "deleted";
    ChannelStatus["TERMINATED"] = "terminated";
})(ChannelStatus = exports.ChannelStatus || (exports.ChannelStatus = {}));
