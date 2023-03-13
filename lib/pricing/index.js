"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingApi = void 0;
const product_api_1 = require("./product-api");
class PricingApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.products = new product_api_1.ProductApi(this.apiClient);
    }
}
exports.PricingApi = PricingApi;
