import { ApiClient } from "../api-client";
import { IdInQueryParams, Limit, PaginatedData } from "../model/common";
import { ProductTaxProperty } from "../model/generated/tax_properties.v3";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 50;

export class ProductTaxPropertyApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getProductTaxProperties<
        Params extends IdInQueryParams,
        T extends ProductTaxProperty
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/tax/products/properties", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async updateProductTaxProperties<T extends ProductTaxProperty>(
        taxProperties: T[]
    ): Promise<PaginatedData<T>> {
        let result: PaginatedData<T> = { data: [], meta: {} };
        for (let i = 0; i < taxProperties.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                "/v3/tax/products/properties",
                taxProperties.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteProductTaxProperties<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/tax/products/properties", params)
        );
    }
}
