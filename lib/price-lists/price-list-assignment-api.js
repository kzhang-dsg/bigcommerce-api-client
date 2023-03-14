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
exports.PriceListAssignmentApi = void 0;
const util_1 = require("../util");
const MAX_BATCH_SIZE = 25;
class PriceListAssignmentApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllPriceListAssignments(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/pricelists/assignments", params), page, limit);
            return response.data;
        });
    }
    createPriceListAssignments(priceListAssignments) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = {};
            for (let i = 0; i < priceListAssignments.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.post("/v3/pricelists/assignments", priceListAssignments.slice(i, i + MAX_BATCH_SIZE));
                result = response.data;
            }
            return result;
        });
    }
    deletePriceListAssignments(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v3/pricelists/assignments", params));
        });
    }
    upsertPriceListAssignment(priceListId, priceListAssignment) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/pricelists/${priceListId}/assignments`, priceListAssignment);
            return response.data;
        });
    }
}
exports.PriceListAssignmentApi = PriceListAssignmentApi;
