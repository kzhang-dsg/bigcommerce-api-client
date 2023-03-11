import { ApiClient } from "../api-client";
import { BankAccountInstrument, CardInstrument, PayPalAccountInstrument } from "../model/generated/customers.v3";
export declare class CustomerStoredInstrumentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomerStoredInstruments<T extends CardInstrument | PayPalAccountInstrument | BankAccountInstrument>(customerId: number): Promise<T[]>;
}
