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
exports.WebhooksApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
const webhook_admin_api_1 = require("./webhook-admin-api");
const webhook_event_api_1 = require("./webhook-event-api");
class WebhooksApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.webhookEvents = new webhook_event_api_1.WebhookEventApi(this.apiClient);
        this.webhookAdmin = new webhook_admin_api_1.WebhookAdminApi(this.apiClient);
    }
    createWebhook(webhook) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/hooks", webhook);
            return response.data;
        });
    }
    getWebhooks(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/hooks", params), page, limit || common_1.Limit.DEFAULT, {
                cache: false, // Never cache because the result is associated to the access_token.
            });
            return response.data;
        });
    }
    getWebhook(webhookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/hooks/${webhookId}`);
            return response.data;
        });
    }
    updateWebhook(webhookId, webhook) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/hooks/${webhookId}`, webhook);
            return response.data;
        });
    }
    deleteWebhook(webhookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.delete(`/v3/hooks/${webhookId}`);
            return response.data;
        });
    }
}
exports.WebhooksApi = WebhooksApi;
