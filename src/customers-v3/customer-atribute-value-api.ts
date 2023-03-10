import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import {
    attributeValue_Base,
    attributeValue_Full,
} from "../model/generated/customers.v3";

import { CustomersV3AttributeValuesQueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 10;

export class CustomerAttributeValueApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomerAttributeValues<
        Params extends CustomersV3AttributeValuesQueryParams,
        T extends attributeValue_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/customers/attribute-values", params),
            page,
            limit
        );
        return response.data;
    }

    async upsertCustomerAttributeValue<
        T extends attributeValue_Base,
        R extends attributeValue_Full
    >(customerAttributeValues: T[]): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (
            let i = 0;
            i < customerAttributeValues.length;
            i += MAX_BATCH_SIZE
        ) {
            const response = await this.apiClient.put(
                "/v3/customers/attribute-values",
                customerAttributeValues.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteCustomerAttributeValue<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/customers/attribute-values", params)
        );
    }
}
