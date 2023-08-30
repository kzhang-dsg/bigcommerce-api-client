import { ApiClient } from "../api-client";
import { IdInQueryParams, Limit, PaginatedData } from "../model/common";
import {
    Property,
    PropertyPOST,
    PropertyPUT,
} from "../model/generated/tax_properties.v3";
import { appendQueryString } from "../util";
import { ProductTaxPropertyApi } from "./product-tax-property-api";

const MAX_BATCH_SIZE = 50;

export class TaxPropertiesApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly productTaxProperties = new ProductTaxPropertyApi(this.apiClient);

    async getTaxProperties<Params extends IdInQueryParams, T extends Property>(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/tax/properties", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async updateTaxProperties<T extends PropertyPUT, R extends Property>(
        taxProperties: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < taxProperties.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/tax/properties",
                taxProperties.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async createTaxProperties<T extends PropertyPOST, R extends Property>(
        taxProperties: T[]
    ): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < taxProperties.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                "/v3/tax/properties",
                taxProperties.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteTaxProperties<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/tax/properties", params)
        );
    }
}
