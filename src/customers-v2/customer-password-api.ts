import { ApiClient } from "../api-client";
import { ValidatePasswordResponse } from "../model/customer";

export class CustomerPasswordApi {
    constructor(private readonly apiClient: ApiClient) {}

    async validatePassword<T extends ValidatePasswordResponse>(
        customerId: number,
        password: string
    ): Promise<T> {
        const response = await this.apiClient.post(
            `/v2/customers/${customerId}/validate`,
            {
                password,
            }
        );
        return response.data;
    }
}
