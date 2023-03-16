"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRatesAndZonesApi = void 0;
const tax_rate_api_1 = require("./tax-rate-api");
const tax_zone_api_1 = require("./tax-zone-api");
class TaxRatesAndZonesApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.taxRates = new tax_rate_api_1.TaxRateApi(this.apiClient);
        this.taxZones = new tax_zone_api_1.TaxZoneApi(this.apiClient);
    }
}
exports.TaxRatesAndZonesApi = TaxRatesAndZonesApi;
