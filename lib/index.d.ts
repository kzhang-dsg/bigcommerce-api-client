import { ApiClient } from "./api-client";
import { CartApi } from "./cart";
import { CatalogApi } from "./catalog";
import { Config } from "./model/common";
export declare class BigCommerceApiClient {
    private readonly config;
    readonly apiClient: ApiClient;
    readonly catalog: CatalogApi;
    readonly cart: CartApi;
    constructor(config: Config);
}
