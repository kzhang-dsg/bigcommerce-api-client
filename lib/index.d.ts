import { ApiClient } from "./api-client";
import { CartsApi } from "./cart";
import { CatalogApi } from "./catalog";
import { CustomersV2Api } from "./customers-v2";
import { Config } from "./model/common";
export declare class BigCommerceApiClient {
    private readonly config;
    readonly apiClient: ApiClient;
    readonly catalog: CatalogApi;
    readonly carts: CartsApi;
    readonly customersV2: CustomersV2Api;
    constructor(config: Config);
}
