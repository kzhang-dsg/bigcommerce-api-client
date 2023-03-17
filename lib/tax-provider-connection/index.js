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
exports.TaxProviderConnectionApi = void 0;
class TaxProviderConnectionApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getConnectionStatus(providerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/tax/providers/${providerId}/connection`);
            return response.data;
        });
    }
    deleteConnection(providerId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/tax/providers/${providerId}/connection`);
        });
    }
    updateConnection(providerId, connectionCredentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/tax/providers/${providerId}/connection`, connectionCredentials);
            return response.data;
        });
    }
}
exports.TaxProviderConnectionApi = TaxProviderConnectionApi;
