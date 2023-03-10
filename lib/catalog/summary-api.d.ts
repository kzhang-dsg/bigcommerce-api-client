import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { catalogSummary_Full } from "../model/generated/catalog.v3";
export declare class SummaryApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCatalogSummary<T extends catalogSummary_Full>(): Promise<Data<T>>;
}
