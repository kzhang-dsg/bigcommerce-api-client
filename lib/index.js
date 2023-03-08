"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigCommerceApiClient = void 0;
const api_client_1 = require("./api-client");
const cart_1 = require("./cart");
const catalog_1 = require("./catalog");
const customers_v2_1 = require("./customers-v2");
const DEFAULT_CONFIG = {
    storeHash: "",
    accessToken: "",
    defaultLimit: 250,
    timeout: 60000,
    maxRetries: 5,
    retryDelay: 5000,
    retryOnReadTimeout: true,
    failOn404: false,
};
class BigCommerceApiClient {
    constructor(config) {
        this.config = config;
        this.config = Object.assign(DEFAULT_CONFIG, this.config);
        this.apiClient = new api_client_1.ApiClient(this.config);
        this.carts = new cart_1.CartsApi(this.apiClient);
        this.catalog = new catalog_1.CatalogApi(this.apiClient);
        this.customersV2 = new customers_v2_1.CustomersV2Api(this.apiClient);
    }
}
exports.BigCommerceApiClient = BigCommerceApiClient;
