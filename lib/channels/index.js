"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsApi = void 0;
const metafield_1 = require("../metafield");
const common_1 = require("../model/common");
const util_1 = require("../util");
const channel_active_theme_api_1 = require("./channel-active-theme-api");
const channel_currency_assignment_api_1 = require("./channel-currency-assignment-api");
const channel_listing_api_1 = require("./channel-listing-api");
const channel_menu_api_1 = require("./channel-menu-api");
const channel_site_api_1 = require("./channel-site-api");
const channel_site_checkout_url_api_1 = require("./channel-site-checkout-url-api");
class ChannelsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.channelActiveTheme = new channel_active_theme_api_1.ChannelActiveThemeApi(this.apiClient);
        this.channelCurrencyAssignments = new channel_currency_assignment_api_1.ChannelCurrencyAssignmentApi(this.apiClient);
        this.channelListings = new channel_listing_api_1.ChannelListingApi(this.apiClient);
        this.channelMenus = new channel_menu_api_1.ChannelMenuApi(this.apiClient);
        this.channelMetafields = new metafield_1.MetafieldApi(this.apiClient, "/v3/channels");
        this.channelSite = new channel_site_api_1.ChannelSiteApi(this.apiClient);
        this.channelSiteCheckoutUrl = new channel_site_checkout_url_api_1.ChannelSiteCheckoutUrlApi(this.apiClient);
    }
    getAllChannels(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/channels", params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createChannel(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/channels", channel);
            return response.data;
        });
    }
    getChannel(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/channels", params));
            return response.data;
        });
    }
    updateChannel(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put("/v3/channels", channel);
            return response.data;
        });
    }
}
exports.ChannelsApi = ChannelsApi;
