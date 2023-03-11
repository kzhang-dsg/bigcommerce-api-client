import { ApiClient } from "../api-client";
import { CountryApi } from "./country-api";
import { StateApi } from "./state-api";

export class GeographyApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly countries = new CountryApi(this.apiClient);
    readonly states = new StateApi(this.apiClient);
}
