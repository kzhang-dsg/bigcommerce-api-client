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
import { PricingApi } from "./pricing";
export declare class BigCommerceApiClient {
    private readonly config;
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
    constructor(config: Config);
    getResources<T>(resourceUrl: string, page?: number, limit?: number): Promise<T[]>;
    flushCache(region?: string): Promise<void>;
}
