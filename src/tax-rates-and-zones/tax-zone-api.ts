import { ApiClient } from "../api-client";
import { IdInQueryParams, Limit, PaginatedData } from "../model/common";
import {
    Tax_Zone,
    Tax_ZonePOST,
    Tax_ZonePUT,
} from "../model/generated/tax_rates_zones.v3";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 50;

export class TaxZoneApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getTaxZones<Params extends IdInQueryParams, T extends Tax_Zone>(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/tax/zones", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async updateTaxZones<T extends Tax_ZonePUT, R extends Tax_Zone>(
        taxZones: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < taxZones.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/tax/zones",
                taxZones.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async createTaxZones<T extends Tax_ZonePOST, R extends Tax_Zone>(
        taxZones: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < taxZones.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                "/v3/tax/zones",
                taxZones.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteTaxZones<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(appendQueryString("/v3/tax/zones", params));
    }
}
