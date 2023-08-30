import { ApiClient } from "../api-client";
import { Count, Limit } from "../model/common";
import {
    customer_Base,
    customer_Full,
    customer_Put,
} from "../model/generated/customers.v2";
import { CustomersV2QueryParams } from "../model/query/customer";
import { appendQueryString } from "../util";
import { CustomerAddressApi } from "./customer-address-api";
import { CustomerGroupApi } from "./customer-group-api";
import { CustomerPasswordApi } from "./customer-password-api";

export class CustomersV2Api {
    constructor(private readonly apiClient: ApiClient) {}

    readonly customerAddresses = new CustomerAddressApi(this.apiClient);
    readonly customerGroups = new CustomerGroupApi(this.apiClient);
    readonly customerPasswords = new CustomerPasswordApi(this.apiClient);

    async getAllCustomers<
        Params extends CustomersV2QueryParams,
        T extends customer_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/customers", params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createCustomer<T extends customer_Base, R extends customer_Full>(
        customer: T
    ): Promise<R> {
        const response = await this.apiClient.post("/v2/customers", customer);
        return response.data;
    }

    async deleteCustomers(): Promise<void> {
        await this.apiClient.delete("/v2/customers");
    }

    async getCustomer<T extends customer_Full>(customerId: number): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/customers/${customerId}`
        );
        return response.data;
    }

    async updateCustomer<T extends customer_Base, R extends customer_Full>(
        customerId: number,
        customer: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/customers/${customerId}`,
            customer
        );
        return response.data;
    }

    async updatePassword<T extends customer_Full>(
        customerId: number,
        newPassword: string,
        confirmPassword?: string
    ): Promise<T> {
        const customer: customer_Put = {
            _authentication: {
                password: newPassword,
            },
        };

        if (confirmPassword && customer._authentication) {
            customer._authentication.password_confirmation = confirmPassword;
        }

        const response = await this.apiClient.put(
            `/v2/customers/${customerId}`,
            customer
        );
        return response.data;
    }

    async forcePasswordResets<T extends customer_Full>(
        customerId: number
    ): Promise<T> {
        const customer: customer_Put = {
            _authentication: {
                force_reset: true,
            },
        };
        const response = await this.apiClient.put(
            `/v2/customers/${customerId}`,
            customer
        );
        return response.data;
    }

    async deleteCustomer(customerId: number): Promise<void> {
        await this.apiClient.delete(`/v2/customers/${customerId}`);
    }

    async getCustomersCount<T extends Count>(): Promise<T> {
        const response = await this.apiClient.get("/v2/customers/count");
        return response.data;
    }
}
