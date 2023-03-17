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
exports.AbandonedCartEmailsApi = void 0;
const util_1 = require("../util");
const email_template_settings_api_1 = require("./email-template-settings-api");
class AbandonedCartEmailsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.templateSettings = new email_template_settings_api_1.EmailTemplateSettingsApi(this.apiClient);
    }
    getAllEmailTemplates(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/marketing/abandoned-cart-emails", params), page, limit);
            return response.data;
        });
    }
    createEmailTemplate(emailTemplate, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post((0, util_1.appendQueryString)("/v3/marketing/abandoned-cart-emails", params), emailTemplate);
            return response.data;
        });
    }
    getEmailTemplate(emailTemplateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/marketing/abandoned-cart-emails/${emailTemplateId}`);
            return response.data;
        });
    }
    updateEmailTemplate(emailTemplateId, emailTemplate) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/marketing/abandoned-cart-emails/${emailTemplateId}`, emailTemplate);
            return response.data;
        });
    }
    deleteEmailTemplate(emailTemplateId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/marketing/abandoned-cart-emails/${emailTemplateId}`);
        });
    }
    getDefaultEmailTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/marketing/abandoned-cart-emails/default`);
            return response.data;
        });
    }
}
exports.AbandonedCartEmailsApi = AbandonedCartEmailsApi;
