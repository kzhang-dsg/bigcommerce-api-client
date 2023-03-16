import { ApiClient } from "../api-client";
import { Data } from "../model/common";
import { Tax_Settings } from "../model/generated/tax_settings.v3";
export declare class TaxSettingsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getTaxSettings<T extends Tax_Settings>(): Promise<Data<T>>;
    updateTaxSettings<T extends Tax_Settings>(taxSettings: T): Promise<Data<T>>;
}
