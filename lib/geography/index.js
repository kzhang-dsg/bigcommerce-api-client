"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeographyApi = void 0;
const country_api_1 = require("./country-api");
const state_api_1 = require("./state-api");
class GeographyApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.countries = new country_api_1.CountryApi(this.apiClient);
        this.states = new state_api_1.StateApi(this.apiClient);
    }
}
exports.GeographyApi = GeographyApi;
