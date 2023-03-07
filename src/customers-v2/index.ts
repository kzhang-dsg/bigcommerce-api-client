import { ApiClient } from "../api-client";
import { Count } from "../model/common";
import { CustomersQueryParams, Customer } from "../model/customer";
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
        Params extends CustomersQueryParams,
        T extends Customer
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/customers", params),
            page,
            limit
        );
        return response.data;
    }

    async createCustomer<T extends Customer>(customer: T): Promise<T> {
        const response = await this.apiClient.post("/v2/customers", customer);
        return response.data;
    }

    async deleteCustomers(): Promise<void> {
        await this.apiClient.delete("/v2/customers");
    }

    async getCustomer<T extends Customer>(customerId: number): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/customers/${customerId}`
        );
        return response.data;
    }

    async updateCustomer<T extends Customer>(customer: T): Promise<T> {
        const response = await this.apiClient.put(
            `/v2/customers/${customer.id}`,
            customer
        );
        return response.data;
    }

    async updatePassword<T extends Customer>(
        customerId: number,
        newPassword: string,
        confirmPassword?: string
    ): Promise<T> {
        const customer: Customer = {
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

    async forcePasswordResets<T extends Customer>(
        customerId: number
    ): Promise<T> {
        const customer: Customer = {
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

    async getCustomersCount<T extends Count>(): Promise<T[]> {
        const response = await this.apiClient.get("/v2/customers/count");
        return response.data;
    }
}
