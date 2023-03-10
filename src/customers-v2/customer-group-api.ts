import { ApiClient } from "../api-client";
import {
    count_Full,
    customerGroup_Full,
    customerGroup_Post,
} from "../model/generated/customers.v2";
import { CustomerV2GroupsQueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";

export class CustomerGroupApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomerGroups<
        Params extends CustomerV2GroupsQueryParams,
        T extends customerGroup_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/customer_groups", params),
            page,
            limit
        );
        return response.data;
    }

    async createCustomerGroup<
        T extends customerGroup_Post,
        R extends customerGroup_Full
    >(customerGroup: T): Promise<R> {
        const response = await this.apiClient.post(
            "/v2/customer_groups",
            customerGroup
        );
        return response.data;
    }

    async deleteCustomerGroups(): Promise<void> {
        await this.apiClient.delete("/v2/customer_groups");
    }

    async getCustomerGroup<T extends customerGroup_Full>(
        customerGroupId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/customer_groups/${customerGroupId}`
        );
        return response.data;
    }

    async updateCustomerGroup<
        T extends customerGroup_Post,
        R extends customerGroup_Full
    >(customerGroupId: number, customerGroup: T): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/customer_groups/${customerGroupId}`,
            customerGroup
        );
        return response.data;
    }

    async deleteCustomerGroup(customerGroupId: number): Promise<void> {
        await this.apiClient.delete(`/v2/customer_groups/${customerGroupId}`);
    }

    async getCustomerGroupsCount<T extends count_Full>(): Promise<T[]> {
        const response = await this.apiClient.get("/v2/customer_groups/count");
        return response.data;
    }
}
