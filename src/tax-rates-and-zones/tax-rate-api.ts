import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import {
    Tax_Rate,
    Tax_RatePOST,
    Tax_RatePUT,
} from "../model/generated/tax_rates_zones.v3";
import { TaxRatesQueryParams } from "../model/query/tax";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 50;

export class TaxRateApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getTaxRates<Params extends TaxRatesQueryParams, T extends Tax_Rate>(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/tax/rates", params),
            page,
            limit
        );
        return response.data;
    }

    async updateTaxRates<T extends Tax_RatePUT, R extends Tax_Rate>(
        taxRates: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < taxRates.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/tax/rates",
                taxRates.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async createTaxRates<T extends Tax_RatePOST, R extends Tax_Rate>(
        taxRates: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < taxRates.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                "/v3/tax/rates",
                taxRates.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteTaxRates<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(appendQueryString("/v3/tax/rates", params));
    }
}
