import { ApiClient } from "./api-client";
import { CatalogApiClient } from "./catalog";
import { Config } from "./model/common";

const DEFAULT_MAX_RETRIES = 5;
const DEFAULT_TIMEOUT = 60000;
const RETRY_DELAY = 5000;

export class BigCommerceApiClient {
    readonly apiClient: ApiClient;
    readonly catalog;

    constructor(private readonly config: Config) {
        this.config.maxRetries = this.config.maxRetries || DEFAULT_MAX_RETRIES;
        this.config.timeout = this.config.timeout || DEFAULT_TIMEOUT;
        this.config.retryDelay = this.config.retryDelay || RETRY_DELAY;
        this.config.retryOnReadTimeout = this.config.retryOnReadTimeout || true;

        this.apiClient = new ApiClient(this.config);
        this.catalog = new CatalogApiClient(this.apiClient);
    }
}
