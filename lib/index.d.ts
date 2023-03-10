import { ApiClient } from "./api-client";
import { CartsApi } from "./cart";
import { CatalogApi } from "./catalog";
import { CustomersV2Api } from "./customers-v2";
import { CustomersV3Api } from "./customers-v3";
import { Config } from "./model/common";
export declare class BigCommerceApiClient {
    private readonly config;
    readonly apiClient: ApiClient;
    readonly carts: CartsApi;
    readonly catalog: CatalogApi;
    readonly customersV2: CustomersV2Api;
    readonly customersV3: CustomersV3Api;
    constructor(config: Config);
    flushCache(region?: string): Promise<void>;
}
