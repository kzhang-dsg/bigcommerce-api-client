import { ApiClient } from "../api-client";
import { CatalogSummary } from "../model/product";
import { Data } from "../model/common";

export class SummaryApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCatalogSummary<T extends CatalogSummary>(): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/catalog/summary`);
        return response.data;
    }
}
