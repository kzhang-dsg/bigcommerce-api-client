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
exports.AnalyticsSettingsApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class AnalyticsSettingsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllAnalyticsProviders(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/settings/analytics`, params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    getAnalyticsProvider(analyticsProviderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/settings/analytics/${analyticsProviderId}`);
            return response.data;
        });
    }
    updateAnalyticsProvider(analyticsProviderId, analyticsProvider, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put((0, util_1.appendQueryString)(`/v3/settings/analytics/${analyticsProviderId}`, params), analyticsProvider);
            return response.data;
        });
    }
}
exports.AnalyticsSettingsApi = AnalyticsSettingsApi;
