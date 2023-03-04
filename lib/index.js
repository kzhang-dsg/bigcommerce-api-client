"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigCommerceApiClient = void 0;
const api_client_1 = require("./api-client");
const catalog_1 = require("./catalog");
const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_TIMEOUT = 60000;
const RETRY_DELAY = 5000;
class BigCommerceApiClient {
    constructor(config) {
        this.config = config;
        this.config.maxRetries = this.config.maxRetries || DEFAULT_MAX_RETRIES;
        this.config.timeout = this.config.timeout || DEFAULT_TIMEOUT;
        this.config.retryDelay = this.config.retryDelay || RETRY_DELAY;
        this.config.retryOnReadTimeout = this.config.retryOnReadTimeout || true;
        this.apiClient = new api_client_1.ApiClient(this.config);
        this.catalog = new catalog_1.CatalogApi(this.apiClient);
    }
}
exports.BigCommerceApiClient = BigCommerceApiClient;
//# sourceMappingURL=index.js.map