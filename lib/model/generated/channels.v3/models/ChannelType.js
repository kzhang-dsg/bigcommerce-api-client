"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelType = void 0;
/**
 * The type of channel; channel `platform` and `type` must be a [valid combination](/api-reference/store-management/channels#platform).
 */
var ChannelType;
(function (ChannelType) {
    ChannelType["POS"] = "pos";
    ChannelType["MARKETPLACE"] = "marketplace";
    ChannelType["STOREFRONT"] = "storefront";
    ChannelType["MARKETING"] = "marketing";
})(ChannelType = exports.ChannelType || (exports.ChannelType = {}));
