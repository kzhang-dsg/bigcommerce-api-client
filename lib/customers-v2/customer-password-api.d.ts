import { ApiClient } from "../api-client";
import { ValidatePasswordResponse } from "../model/customer";
export declare class CustomerPasswordApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    validatePassword<T extends ValidatePasswordResponse>(customerId: number, password: string): Promise<T>;
}
