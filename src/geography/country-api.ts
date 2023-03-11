import { ApiClient } from "../api-client";
import { country_Full, count_Full } from "../model/generated/geography.v2";
import { CountriesQueryParams } from "../model/query/geography";
import { appendQueryString } from "../util";

export class CountryApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCountries<
        Params extends CountriesQueryParams,
        T extends country_Full
    >(params?: Params, page?: number, limit?: number): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString("/v2/countries", params),
            page,
            limit
        );
        return response.data;
    }

    async getCountry<T extends country_Full>(countryId: number): Promise<T> {
        const response = await this.apiClient.get(`/v2/countries/${countryId}`);
        return response.data;
    }

    async getCountriesCount<T extends count_Full>(): Promise<T> {
        const response = await this.apiClient.get(`/v2/countries/count`);
        return response.data;
    }
}
