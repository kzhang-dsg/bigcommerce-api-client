import { ApiClient } from "../api-client";
import { ValidateCustomerCredentialsObject, ValidateCustomerCredentialsResponseObject } from "../model/generated/customers.v3";
export declare class ValidateCustomerCredentialApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    validateCustomerCredentials<T extends ValidateCustomerCredentialsObject, R extends ValidateCustomerCredentialsResponseObject>(credentials: T): Promise<R>;
}
