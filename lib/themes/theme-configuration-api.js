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
exports.ThemeConfigurationApi = void 0;
const util_1 = require("../util");
class ThemeConfigurationApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getThemeConfiguration(themeUuid, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/themes/${themeUuid}/actions/configurations`, params), page, limit);
            return response.data;
        });
    }
    validateThemeConfiguration(themeUuid, activate) {
        return __awaiter(this, void 0, void 0, function* () {
            // throws error if invalid. Detailed errors in error.response.data: ErrorResponse object
            yield this.apiClient.post(`/v3/themes/${themeUuid}/actions/validate`, activate);
            return true;
        });
    }
}
exports.ThemeConfigurationApi = ThemeConfigurationApi;
