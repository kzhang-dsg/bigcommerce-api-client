import { ApiClient } from "../api-client";
import {
    BankAccountInstrument,
    CardInstrument,
    PayPalAccountInstrument,
} from "../model/generated/customers.v3";

export class CustomerStoredInstrumentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomerStoredInstruments<
        T extends
            | CardInstrument
            | PayPalAccountInstrument
            | BankAccountInstrument
    >(customerId: number): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v3/customers/${customerId}/stored-instruments`
        );
        return response.data;
    }
}
