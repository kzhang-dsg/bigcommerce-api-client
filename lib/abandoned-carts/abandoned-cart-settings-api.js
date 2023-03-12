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
exports.AbandonedCartSSettingsApi = void 0;
class AbandonedCartSSettingsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getGlobalAbandonedCartSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/abandoned-carts/settings`);
            return response.data;
        });
    }
    updateGlobalAbandonedCartSettings(abandonedCartSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/abandoned-carts/settings`, abandonedCartSettings);
            return response.data;
        });
    }
    getChannelAbandonedCartSettings(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/abandoned-carts/settings/channels/${channelId}`);
            return response.data;
        });
    }
    updateChannelAbandonedCartSettings(channelId, abandonedCartSettings) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/abandoned-carts/settings/channels/${channelId}`, abandonedCartSettings);
            return response.data;
        });
    }
}
exports.AbandonedCartSSettingsApi = AbandonedCartSSettingsApi;
