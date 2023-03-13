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
exports.CurrenciesApi = void 0;
class CurrenciesApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getCurrency(currencyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/currencies/${currencyId}`);
            return response.data;
        });
    }
    updateCurrency(currencyId, currency) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/currencies/${currencyId}`, currency);
            return response.data;
        });
    }
    deleteCurrency(currencyId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/currencies/${currencyId}`);
        });
    }
    getAllCurrencies(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get("/v2/currencies", page, limit);
            return response.data;
        });
    }
    createCurrency(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v2/currencies", currency);
            return response.data;
        });
    }
    deleteAllCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/currencies`);
        });
    }
}
exports.CurrenciesApi = CurrenciesApi;
