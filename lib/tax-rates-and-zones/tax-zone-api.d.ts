import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { Tax_Zone, Tax_ZonePOST, Tax_ZonePUT } from "../model/generated/tax_rates_zones.v3";
export declare class TaxZoneApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getTaxZones<Params extends IdInQueryParams, T extends Tax_Zone>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    updateTaxZones<T extends Tax_ZonePUT, R extends Tax_Zone>(taxZones: T[]): Promise<PaginatedData<R>>;
    createTaxZones<T extends Tax_ZonePOST, R extends Tax_Zone>(taxZones: T[]): Promise<PaginatedData<R>>;
    deleteTaxZones<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
