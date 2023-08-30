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
exports.CustomerGroupApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
class CustomerGroupApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllCustomerGroups(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v2/customer_groups", params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createCustomerGroup(customerGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/customer_groups", customerGroup);
            return response.data;
        });
    }
    deleteCustomerGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete("/v2/customer_groups");
        });
    }
    getCustomerGroup(customerGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/customer_groups/${customerGroupId}`);
            return response.data;
        });
    }
    updateCustomerGroup(customerGroupId, customerGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/customer_groups/${customerGroupId}`, customerGroup);
            return response.data;
        });
    }
    deleteCustomerGroup(customerGroupId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/customer_groups/${customerGroupId}`);
        });
    }
    getCustomerGroupsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/customer_groups/count");
            return response.data;
        });
    }
}
exports.CustomerGroupApi = CustomerGroupApi;
