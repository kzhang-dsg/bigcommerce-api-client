import { ApiClient } from "../api-client";
import { IdInQueryParams, Limit, PaginatedData } from "../model/common";
import {
    attribute_Full,
    attribute_Post,
    attribute_Put,
} from "../model/generated/customers.v3";
import { CustomersV3AttributesQueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

export class CustomerAttributeApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomerAttributes<
        Params extends CustomersV3AttributesQueryParams,
        T extends attribute_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/customers/attributes", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createCustomerAttribute<
        T extends attribute_Post,
        R extends attribute_Full
    >(customerAttribute: T): Promise<PaginatedData<R>> {
        const response = await this.apiClient.post(
            "/v3/customers/attributes",
            customerAttribute
        );
        return response.data;
    }

    async updateCustomerAttribute<
        T extends attribute_Put,
        R extends attribute_Full
    >(customerAttribute: T): Promise<PaginatedData<R>> {
        const response = await this.apiClient.put(
            "/v3/customers/attributes",
            customerAttribute
        );
        return response.data;
    }

    async deleteCustomerAttribute<Params extends IdInQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/customers/attributes", params)
        );
    }
}
