import { ApiClient } from "./api-client";
import { CatalogApi } from "./catalog";
import { Config } from "./model/common";
export declare class BigCommerceApiClient {
    private readonly config;
    readonly apiClient: ApiClient;
    readonly catalog: CatalogApi;
    constructor(config: Config);
}
