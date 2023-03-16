import { AxiosCacheInstance } from "axios-cache-interceptor";
import { AbandonedCartApi } from "./abandoned-carts";
import { ApiClient } from "./api-client";
import { CartsApi } from "./cart";
import { CatalogApi } from "./catalog";
import { ChannelsApi } from "./channels";
import { CheckoutsApi } from "./checkouts";
import { CurrenciesApi } from "./currencies";
import { CustomersV2Api } from "./customers-v2";
import { CustomersV3Api } from "./customers-v3";
import { Config } from "./model/common";
import { OrderApi } from "./order";
import { PriceListsApi } from "./price-lists";
import { PricingApi } from "./pricing";
import { RedirectsApi } from "./redirects";
import { ScriptsApi } from "./scripts";
import { SettingsApi } from "./settings";
import { ShippingV2Api } from "./shipping-v2";
import { ShippingV3Api } from "./shipping-v3";

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
    readonly abandonedCarts: AbandonedCartApi;
    readonly carts: CartsApi;
    readonly catalog: CatalogApi;
    readonly channels: ChannelsApi;
    readonly checkouts: CheckoutsApi;
    readonly currencies: CurrenciesApi;
    readonly customersV2: CustomersV2Api;
    readonly customersV3: CustomersV3Api;
    readonly orders: OrderApi;
    readonly pricing: PricingApi;
    readonly priceLists: PriceListsApi;
    readonly redirects: RedirectsApi;
    readonly scripts: ScriptsApi;
    readonly settings: SettingsApi;
    readonly shippingV3: ShippingV3Api;
    readonly shippingV2: ShippingV2Api;

    constructor(private readonly config: Config) {
        this.config = Object.assign(DEFAULT_CONFIG, this.config);

        this.apiClient = new ApiClient(this.config);
        this.abandonedCarts = new AbandonedCartApi(this.apiClient);
        this.carts = new CartsApi(this.apiClient);
        this.catalog = new CatalogApi(this.apiClient);
        this.channels = new ChannelsApi(this.apiClient);
        this.checkouts = new CheckoutsApi(this.apiClient);
        this.currencies = new CurrenciesApi(this.apiClient);
        this.customersV2 = new CustomersV2Api(this.apiClient);
        this.customersV3 = new CustomersV3Api(this.apiClient);
        this.orders = new OrderApi(this.apiClient);
        this.pricing = new PricingApi(this.apiClient);
        this.priceLists = new PriceListsApi(this.apiClient);
        this.redirects = new RedirectsApi(this.apiClient);
        this.scripts = new ScriptsApi(this.apiClient);
        this.settings = new SettingsApi(this.apiClient);
        this.shippingV3 = new ShippingV3Api(this.apiClient);
        this.shippingV2 = new ShippingV2Api(this.apiClient);
    }

    async getResources<T>(
        resourceUrl: string,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        return this.apiClient.getResources<T>(resourceUrl, page, limit);
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
