import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import {
    attributeValue_Base,
    attributeValue_Full,
} from "../model/generated/customers.v3";

import { CustomersV3FormFieldValuesQueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 10;

export class CustomerFormFieldValueApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomerFormFieldValues<
        Params extends CustomersV3FormFieldValuesQueryParams,
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

    async upsertCustomerFormFieldValue<
        T extends attributeValue_Base,
        R extends attributeValue_Full
    >(customerFormFieldValues: T[]): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (
            let i = 0;
            i < customerFormFieldValues.length;
            i += MAX_BATCH_SIZE
        ) {
            const response = await this.apiClient.put(
                "/v3/customers/attribute-values",
                customerFormFieldValues.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }

    async deleteCustomerFormFieldValue<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/customers/attribute-values", params)
        );
    }
}
