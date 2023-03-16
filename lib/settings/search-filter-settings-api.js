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
exports.SearchFilterSettingsApi = void 0;
const util_1 = require("../util");
class SearchFilterSettingsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getEnabledFilters(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v3/settings/search/filters", page, limit);
            return response.data;
        });
    }
    updateEnabledFilters(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put("/v3/settings/search/filters", filters);
            return response.data;
        });
    }
    getAvailableFilters(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/settings/search/filters/available", params), page, limit);
            return response.data;
        });
    }
    getContextualFilters(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/settings/search/filters/contexts", params), page, limit);
            return response.data;
        });
    }
    upsertEnabledFilters(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put("/v3/settings/search/filters/contexts", filters);
            return response.data;
        });
    }
}
exports.SearchFilterSettingsApi = SearchFilterSettingsApi;
