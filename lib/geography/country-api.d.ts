import { ApiClient } from "../api-client";
import { country_Full, count_Full } from "../model/generated/geography.v2";
import { CountriesQueryParams } from "../model/query/geography";
export declare class CountryApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCountries<Params extends CountriesQueryParams, T extends country_Full>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    getCountry<T extends country_Full>(countryId: number): Promise<T>;
    getCountriesCount<T extends count_Full>(): Promise<T>;
}
