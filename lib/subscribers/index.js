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
exports.SubscribersApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class SubscribersApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getSubscribers(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/customers/subscribers", params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createSubscriber(subscriber) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/customers/subscribers", subscriber);
            return response.data;
        });
    }
    deleteSubscribers(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v3/customers/subscribers", params));
        });
    }
    getSubscriber(subscriberId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/customers/subscribers/${subscriberId}`);
            return response.data;
        });
    }
    updateSubscriber(subscriberId, subscriber) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/customers/subscribers/${subscriberId}`, subscriber);
            return response.data;
        });
    }
    deleteSubscriber(subscriberId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/customers/subscribers/${subscriberId}`);
        });
    }
}
exports.SubscribersApi = SubscribersApi;
