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
exports.LogoSettingsApi = void 0;
class LogoSettingsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getLogoSettings(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/settings/logo${channelId ? "?channel_id=" + channelId : ""}`);
            return response.data;
        });
    }
    updateLogoSettings(logoSettings, channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/settings/logo${channelId ? "?channel_id=" + channelId : ""}`, logoSettings);
            return response.data;
        });
    }
}
exports.LogoSettingsApi = LogoSettingsApi;
