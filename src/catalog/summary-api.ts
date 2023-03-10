import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { catalogSummary_Full } from "../model/generated/catalog.v3";

export class SummaryApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCatalogSummary<T extends catalogSummary_Full>(): Promise<Data<T>> {
        const response = await this.apiClient.get(`/v3/catalog/summary`);
        return response.data;
    }
}
