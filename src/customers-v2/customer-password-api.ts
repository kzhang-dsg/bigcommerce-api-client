import { ApiClient } from "../api-client";
import { validatePassword } from "../model/generated/customers.v2";

export class CustomerPasswordApi {
    constructor(private readonly apiClient: ApiClient) {}

    async validatePassword<T extends validatePassword>(
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
