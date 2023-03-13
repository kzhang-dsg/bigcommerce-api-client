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
exports.ProductApi = void 0;
const MAX_BATCH_SIZE = 50;
class ProductApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    batchGetPrices(pricingRequest) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let result = { data: [], meta: {} };
            let items = (_a = pricingRequest.items) === null || _a === void 0 ? void 0 : _a.slice();
            if (items) {
                for (let i = 0; i < (items.length || 0); i += MAX_BATCH_SIZE) {
                    pricingRequest.items = items.slice(i, i + MAX_BATCH_SIZE);
                    const response = yield this.apiClient.post("/v3/pricing/products", pricingRequest);
                    (_b = result.data) === null || _b === void 0 ? void 0 : _b.concat(response.data.data);
                }
            }
            return result;
        });
    }
}
exports.ProductApi = ProductApi;
