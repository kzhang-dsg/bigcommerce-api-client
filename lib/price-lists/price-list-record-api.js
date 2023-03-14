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
exports.PriceListRecordApi = void 0;
const util_1 = require("../util");
const MAX_BATCH_SIZE = 1000;
class PriceListRecordApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllPriceListRecords(priceListId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/pricelists/${priceListId}/records`, params), page, limit);
            return response.data;
        });
    }
    upsertPriceListRecords(priceListId, priceListRecords) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            for (let i = 0; i < priceListRecords.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.post(`/v3/pricelists/${priceListId}/records`, priceListRecords.slice(i, i + MAX_BATCH_SIZE));
                result.concat(response.data);
            }
            return result;
        });
    }
    deletePriceListRecords(priceListId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)(`/v3/pricelists/${priceListId}/records`, params));
        });
    }
    getPriceListRecordByVariant(priceListId, variantId, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/pricelists/${priceListId}/records/${variantId}`, page, limit);
            return response.data;
        });
    }
    getPriceListRecordByCurrencyCode(priceListId, variantId, currencyCode, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`, page, limit);
            return response.data;
        });
    }
    setPriceListRecordByCurrencyCode(priceListId, variantId, currencyCode, priceRecord) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`, priceRecord);
            return response.data;
        });
    }
    deletePriceListRecordByCurrencyCode(priceListId, variantId, currencyCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`);
        });
    }
}
exports.PriceListRecordApi = PriceListRecordApi;
