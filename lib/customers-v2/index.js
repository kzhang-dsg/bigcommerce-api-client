"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersV2Api = void 0;
const customer_api_1 = require("./customer-api");
class CustomersV2Api {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.customers = new customer_api_1.CustomerApi(this.apiClient);
    }
}
exports.CustomersV2Api = CustomersV2Api;
