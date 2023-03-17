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
exports.WidgetApi = void 0;
const util_1 = require("../util");
class WidgetApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    createWidget(widget) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/content/widgets", widget);
            return response.data;
        });
    }
    getAllWidgets(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/content/widgets", params), page, limit);
            return response.data;
        });
    }
    getWidget(widgetUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/content/widgets/${widgetUuid}`);
            return response.data;
        });
    }
    updateWidget(widgetUuid, widget) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/content/widgets/${widgetUuid}`, widget);
            return response.data;
        });
    }
    deleteWidget(widgetUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/content/widgets/${widgetUuid}`);
        });
    }
}
exports.WidgetApi = WidgetApi;
