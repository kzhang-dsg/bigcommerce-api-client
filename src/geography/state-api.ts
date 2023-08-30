import { ApiClient } from "../api-client";
import { Count, Limit } from "../model/common";
import { countriesState_Full } from "../model/generated/geography.v2";
import { StatesQueryParams } from "../model/query/geography";
import { appendQueryString } from "../util";

export class StateApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllCountryStates<
        Params extends StatesQueryParams,
        T extends countriesState_Full
    >(
        countryId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            appendQueryString(`/v2/countries/${countryId}/states`, params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getCountryState<T extends countriesState_Full>(
        countryId: number,
        stateId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/countries/${countryId}/states/${stateId}`
        );
        return response.data;
    }

    async getStatesCount<T extends Count>(): Promise<T> {
        const response = await this.apiClient.get(`/v2/countries/states/count`);
        return response.data;
    }

    async getAllStates<T extends countriesState_Full>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            `/v2/countries/states`,
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async getCountryStatesCount<T extends Count>(
        countryId: number
    ): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/countries/${countryId}/states/count`
        );
        return response.data;
    }
}
