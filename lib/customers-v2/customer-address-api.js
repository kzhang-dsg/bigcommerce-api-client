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
exports.CustomerAddressApi = void 0;
class CustomerAddressApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllCustomerAddresses(customerId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/customers/${customerId}/addresses`, page, limit);
            return response.data;
        });
    }
    createCustomerAddress(customerId, customerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v2/customers/${customerId}/addresses`, customerAddress);
            return response.data;
        });
    }
    deleteCustomerAddresses(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/customers/${customerId}/addresses`);
        });
    }
    getCustomerAddress(customerId, customerAddressId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/customers/${customerId}/addresses/${customerAddressId}`);
            return response.data;
        });
    }
    updateCustomerAddress(customerId, customerAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/customers/${customerId}/addresses/${customerAddress.id}`, customerAddress);
            return response.data;
        });
    }
    deleteCustomerAddress(customerId, customerAddressId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/customers/${customerId}/addresses/${customerAddressId}`);
        });
    }
    getCustomerAddressesCount(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/customers/${customerId}/addresses/count`);
            return response.data;
        });
    }
}
exports.CustomerAddressApi = CustomerAddressApi;
