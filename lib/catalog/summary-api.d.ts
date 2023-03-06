import { ApiClient } from "../api-client";
import { CatalogSummary } from "../model/catalog";
import { Data } from "../model/common";
export declare class SummaryApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCatalogSummary<T extends CatalogSummary>(): Promise<Data<T>>;
}
