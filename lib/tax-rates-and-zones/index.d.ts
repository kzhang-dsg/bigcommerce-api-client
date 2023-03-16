import { ApiClient } from "../api-client";
import { TaxRateApi } from "./tax-rate-api";
import { TaxZoneApi } from "./tax-zone-api";
export declare class TaxRatesAndZonesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly taxRates: TaxRateApi;
    readonly taxZones: TaxZoneApi;
}
