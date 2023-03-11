import { ApiClient } from "../api-client";
import { CountryApi } from "./country-api";
import { StateApi } from "./state-api";
export declare class GeographyApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly countries: CountryApi;
    readonly states: StateApi;
}
