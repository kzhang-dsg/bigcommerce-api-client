import { ApiClient } from "./api-client";
import { CartApi } from "./cart";
import { CatalogApi } from "./catalog";
import { Config } from "./model/common";

const DEFAULT_CONFIG: Config = {
    storeHash: "",
    accessToken: "",
    timeout: 60000,
    maxRetries: 5,
    retryDelay: 5000,
    retryOnReadTimeout: true,
    failOn404: false,
};

export class BigCommerceApiClient {
    readonly apiClient: ApiClient;
    readonly catalog: CatalogApi;
    readonly cart: CartApi;

    constructor(private readonly config: Config) {
        this.config = Object.assign(DEFAULT_CONFIG, this.config);

        this.apiClient = new ApiClient(this.config);
        this.catalog = new CatalogApi(this.apiClient);
        this.cart = new CartApi(this.apiClient);
    }
}
