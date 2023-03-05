"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigCommerceApiClient = void 0;
const api_client_1 = require("./api-client");
const catalog_1 = require("./catalog");
const DEFAULT_CONFIG = {
    storeHash: "",
    accessToken: "",
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
        this.catalog = new catalog_1.CatalogApi(this.apiClient);
    }
}
exports.BigCommerceApiClient = BigCommerceApiClient;
