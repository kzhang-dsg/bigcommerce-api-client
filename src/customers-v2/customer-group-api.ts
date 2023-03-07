import { ApiClient } from "../api-client";
import { CustomerGroup, CustomerGroupsQueryParams } from "../model/customer";
import { Count } from "../model/common";
import { appendQueryString } from "../util";

export class CustomerGroupApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCustomerGroups<
        Params extends CustomerGroupsQueryParams,
        T extends CustomerGroup
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/customer_groups", params),
            page,
            limit
        );
        return response.data;
    }

    async createCustomerGroup<T extends CustomerGroup>(
        customerGroup: T
    ): Promise<T> {
        const response = await this.apiClient.post(
            "/v2/customer_groups",
            customerGroup
        );
        return response.data;
    }

    async deleteCustomerGroups(): Promise<void> {
        await this.apiClient.delete("/v2/customer_groups");
    }

    async getCustomerGroup<T extends CustomerGroup>(
        customerGroupId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/customer_groups/${customerGroupId}`
        );
        return response.data;
    }

    async updateCustomerGroup<T extends CustomerGroup>(
        customerGroup: T
    ): Promise<T> {
        const response = await this.apiClient.put(
            `/v2/customer_groups/${customerGroup.id}`,
            customerGroup
        );
        return response.data;
    }

    async deleteCustomerGroup(customerGroupId: number): Promise<void> {
        await this.apiClient.delete(`/v2/customer_groups/${customerGroupId}`);
    }

    async getCustomerGroupsCount<T extends Count>(): Promise<T[]> {
        const response = await this.apiClient.get("/v2/customer_groups/count");
        return response.data;
    }
}
