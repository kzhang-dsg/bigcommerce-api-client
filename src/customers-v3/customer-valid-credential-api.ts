import { ApiClient } from "../api-client";
import {
    ValidateCustomerCredentialsObject,
    ValidateCustomerCredentialsResponseObject,
} from "../model/generated/customers.v3";

export class ValidateCustomerCredentialApi {
    constructor(private readonly apiClient: ApiClient) {}

    async validateCustomerCredentials<
        T extends ValidateCustomerCredentialsObject,
        R extends ValidateCustomerCredentialsResponseObject
    >(credentials: T): Promise<R> {
        const response = await this.apiClient.post(
            "/v3/customers/validate-credentials",
            credentials
        );
        return response.data;
    }
}
