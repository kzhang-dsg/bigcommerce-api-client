import { ApiClient } from "../api-client";
import { Limit, PaginatedData } from "../model/common";
import { formFieldValue_Full } from "../model/generated/customers.v3";
import { CustomersV3FormFieldValuesQueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 10;

export class CustomerFormFieldValueApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomerFormFieldValues<
        Params extends CustomersV3FormFieldValuesQueryParams,
        T extends formFieldValue_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/customers/form-field-values", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async upsertCustomerFormFieldValue<T extends formFieldValue_Full>(
        customerFormFieldValues: T[]
    ): Promise<PaginatedData<T>> {
        let result: PaginatedData<T> = { data: [], meta: {} };
        for (
            let i = 0;
            i < customerFormFieldValues.length;
            i += MAX_BATCH_SIZE
        ) {
            const response = await this.apiClient.put(
                "/v3/customers/form-field-values",
                customerFormFieldValues.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }
}
