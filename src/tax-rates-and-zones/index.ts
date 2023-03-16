import { ApiClient } from "../api-client";
import { TaxRateApi } from "./tax-rate-api";
import { TaxZoneApi } from "./tax-zone-api";

export class TaxRatesAndZonesApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly taxRates = new TaxRateApi(this.apiClient);
    readonly taxZones = new TaxZoneApi(this.apiClient);
}
