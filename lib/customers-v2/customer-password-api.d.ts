import { ApiClient } from "../api-client";
import { validatePassword } from "../model/generated/customers.v2";
export declare class CustomerPasswordApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    validatePassword<T extends validatePassword>(customerId: number, password: string): Promise<T>;
}
