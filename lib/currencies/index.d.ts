import { ApiClient } from "../api-client";
import { currency_Full, currency_Post, currency_Put } from "../model/generated/currencies.v2";
export declare class CurrenciesApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCurrency<T extends currency_Full>(currencyId: number): Promise<T>;
    updateCurrency<T extends currency_Put, R extends currency_Full>(currencyId: number, currency: T): Promise<R>;
    deleteCurrency(currencyId: number): Promise<void>;
    getAllCurrencies<T extends currency_Full>(page?: number, limit?: number): Promise<T[]>;
    createCurrency<T extends currency_Post, R extends currency_Full>(currency: T): Promise<R>;
    deleteAllCurrencies(): Promise<void>;
}
