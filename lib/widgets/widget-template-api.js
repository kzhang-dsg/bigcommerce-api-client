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
exports.WidgetTemplateApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class WidgetTemplateApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    createWidgetTemplate(widgetTemplate) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/content/widget-templates", widgetTemplate);
            return response.data;
        });
    }
    getAllWidgetTemplates(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/content/widget-templates", params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    renderWidgetTemplate(widgetTemplateUuid, widgetTemplatePreview) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v3/content/widget-templates/${widgetTemplateUuid}/preview`, widgetTemplatePreview);
            return response.data;
        });
    }
    getWidgetTemplate(widgetTemplateUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/content/widget-templates/${widgetTemplateUuid}`);
            return response.data;
        });
    }
    updateWidgetTemplate(widgetTemplateUuid, widgetTemplate) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/content/widget-templates/${widgetTemplateUuid}`, widgetTemplate);
            return response.data;
        });
    }
    deleteWidgetTemplate(widgetTemplateUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/content/widget-templates/${widgetTemplateUuid}`);
        });
    }
}
exports.WidgetTemplateApi = WidgetTemplateApi;
