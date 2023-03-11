import { ApiClient } from "../api-client";
import { countriesState_Full, count_Full } from "../model/generated/geography.v2";
import { StatesQueryParams } from "../model/query/geography";
export declare class StateApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllCountryStates<Params extends StatesQueryParams, T extends countriesState_Full>(countryId: number, params?: Params, page?: number, limit?: number): Promise<T[]>;
    getCountryState<T extends countriesState_Full>(countryId: number, stateId: number): Promise<T>;
    getStatesCount<T extends count_Full>(): Promise<T>;
    getAllStates<T extends countriesState_Full>(page?: number, limit?: number): Promise<T[]>;
    getCountryStatesCount<T extends count_Full>(countryId: number): Promise<T>;
}
