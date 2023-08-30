import { ApiClient } from "../api-client";
import { Limit } from "../model/common";
import {
    currency_Full,
    currency_Post,
    currency_Put,
} from "../model/generated/currencies.v2";

export class CurrenciesApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCurrency<T extends currency_Full>(currencyId: number): Promise<T> {
        const response = await this.apiClient.get(
            `/v2/currencies/${currencyId}`
        );
        return response.data;
    }

    async updateCurrency<T extends currency_Put, R extends currency_Full>(
        currencyId: number,
        currency: T
    ): Promise<R> {
        const response = await this.apiClient.put(
            `/v2/currencies/${currencyId}`,
            currency
        );
        return response.data;
    }

    async deleteCurrency(currencyId: number): Promise<void> {
        await this.apiClient.delete(`/v2/currencies/${currencyId}`);
    }

    async getAllCurrencies<T extends currency_Full>(
        page?: number,
        limit?: number
    ): Promise<T[]> {
        const response = await this.apiClient.get(
            "/v2/currencies",
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async createCurrency<T extends currency_Post, R extends currency_Full>(
        currency: T
    ): Promise<R> {
        const response = await this.apiClient.post("/v2/currencies", currency);
        return response.data;
    }

    async deleteAllCurrencies(): Promise<void> {
        await this.apiClient.delete(`/v2/currencies`);
    }
}
