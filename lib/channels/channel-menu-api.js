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
exports.ChannelMenuApi = void 0;
class ChannelMenuApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getChannelMenus(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/channels/${channelId}/channel-menus`);
            return response.data;
        });
    }
    createChannelMenus(channelId, channelMenus) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/channels/${channelId}/channel-menus`, channelMenus);
            return response.data;
        });
    }
    deleteChannelMenus(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.delete(`/v3/channels/${channelId}/channel-menus`);
            return response.data;
        });
    }
}
exports.ChannelMenuApi = ChannelMenuApi;
