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
exports.PriceListsApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
const price_list_assignment_api_1 = require("./price-list-assignment-api");
const price_list_record_api_1 = require("./price-list-record-api");
class PriceListsApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.priceListAssignments = new price_list_assignment_api_1.PriceListAssignmentApi(this.apiClient);
        this.priceListRecords = new price_list_record_api_1.PriceListRecordApi(this.apiClient);
    }
    getAllPriceLists(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/pricelists", params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    createPriceList(priceList) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/pricelists", priceList);
            return response.data;
        });
    }
    deleteAllPriceLists(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v3/pricelists", params));
        });
    }
    getPriceList(priceListId, params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)(`/v3/pricelists/${priceListId}`, params), page, limit);
            return response.data;
        });
    }
    updatePriceList(priceListId, priceList) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/pricelists/${priceListId}`, priceList);
            return response.data;
        });
    }
}
exports.PriceListsApi = PriceListsApi;
