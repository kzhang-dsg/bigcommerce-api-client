import { AxiosCacheInstance } from "axios-cache-interceptor";
import { ApiClient } from "./api-client";
import { CartsApi } from "./cart";
import { CatalogApi } from "./catalog";
import { CustomersV2Api } from "./customers-v2";
import { Config } from "./model/common";

const DEFAULT_CONFIG: Config = {
    storeHash: "",
    accessToken: "",
    defaultLimit: 250,
    timeout: 60000,
    maxRetries: 5,
    retryDelay: 5000,
    retryOnReadTimeout: true,
    failOn404: false,
    cache: {
        enable: false,
        ttl: 1000 * 60 * 10, // 10 minute.
        cloneData: false,
    },
};

export class BigCommerceApiClient {
    readonly apiClient: ApiClient;
    readonly carts: CartsApi;
    readonly catalog: CatalogApi;
    readonly customersV2: CustomersV2Api;

    constructor(private readonly config: Config) {
        this.config = Object.assign(DEFAULT_CONFIG, this.config);

        this.apiClient = new ApiClient(this.config);
        this.carts = new CartsApi(this.apiClient);
        this.catalog = new CatalogApi(this.apiClient);
        this.customersV2 = new CustomersV2Api(this.apiClient);
    }

    async flushCache(region?: string): Promise<void> {
        if (!this.config.cache?.enable) {
            return;
        }

        (this.apiClient.axiosInstance as AxiosCacheInstance).storage.remove(
            region || "*"
        );
    }
}
