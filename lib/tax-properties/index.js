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
exports.TaxPropertiesApi = void 0;
const common_1 = require("../model/common");
const util_1 = require("../util");
const product_tax_property_api_1 = require("./product-tax-property-api");
const MAX_BATCH_SIZE = 50;
class TaxPropertiesApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.productTaxProperties = new product_tax_property_api_1.ProductTaxPropertyApi(this.apiClient);
    }
    getTaxProperties(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/tax/properties", params), page, limit || common_1.Limit.DEFAULT);
            return response.data;
        });
    }
    updateTaxProperties(taxProperties) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { data: [], meta: {} };
            for (let i = 0; i < taxProperties.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.put("/v3/tax/properties", taxProperties.slice(i, i + MAX_BATCH_SIZE));
                result.data = (_a = result.data) === null || _a === void 0 ? void 0 : _a.concat(response.data.data);
            }
            return result;
        });
    }
    createTaxProperties(taxProperties) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { data: [], meta: {} };
            for (let i = 0; i < taxProperties.length; i += MAX_BATCH_SIZE) {
                const response = yield this.apiClient.post("/v3/tax/properties", taxProperties.slice(i, i + MAX_BATCH_SIZE));
                result.data = (_a = result.data) === null || _a === void 0 ? void 0 : _a.concat(response.data.data);
            }
            return result;
        });
    }
    deleteTaxProperties(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete((0, util_1.appendQueryString)("/v3/tax/properties", params));
        });
    }
}
exports.TaxPropertiesApi = TaxPropertiesApi;
