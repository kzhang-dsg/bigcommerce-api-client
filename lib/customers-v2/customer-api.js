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
exports.CustomerApi = void 0;
const util_1 = require("../util");
class CustomerApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllCustomers(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v2/customers", params), page, limit);
            return response.data;
        });
    }
    createCustomer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/customers", customer);
            return response.data;
        });
    }
    deleteCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete("/v2/customers");
        });
    }
    getCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/customers/${customerId}`);
            return response.data;
        });
    }
    updateCustomer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/customers/${customer.id}`, customer);
            return response.data;
        });
    }
    updatePassword(customerId, newPassword, confirmPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = {
                _authentication: {
                    password: newPassword,
                },
            };
            if (confirmPassword && customer._authentication) {
                customer._authentication.password_confirmation = confirmPassword;
            }
            const response = yield this.apiClient.put(`/v2/customers/${customerId}`, customer);
            return response.data;
        });
    }
    forcePasswordResets(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = {
                _authentication: {
                    force_reset: true,
                },
            };
            const response = yield this.apiClient.put(`/v2/customers/${customerId}`, customer);
            return response.data;
        });
    }
    deleteCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/customers/${customerId}`);
        });
    }
    getCustomersCount() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/customers/count");
            return response.data;
        });
    }
}
exports.CustomerApi = CustomerApi;
