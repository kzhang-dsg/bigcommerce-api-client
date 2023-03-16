import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { Tax_Rate, Tax_RatePOST, Tax_RatePUT } from "../model/generated/tax_rates_zones.v3";
import { TaxRatesQueryParams } from "../model/query/tax";
export declare class TaxRateApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getTaxRates<Params extends TaxRatesQueryParams, T extends Tax_Rate>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    updateTaxRates<T extends Tax_RatePUT, R extends Tax_Rate>(taxRates: T[]): Promise<PaginatedData<R>>;
    createTaxRates<T extends Tax_RatePOST, R extends Tax_Rate>(taxRates: T[]): Promise<PaginatedData<R>>;
    deleteTaxRates<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
