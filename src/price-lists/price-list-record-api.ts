import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import {
    PriceRecord,
    PriceRecordCollectionPut,
    PriceRecordPut,
} from "../model/generated/price_lists.v3";
import {
    DeletePriceListRecordsQueryParams,
    PriceListRecordsQueryParams,
} from "../model/query/price-list";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 1000;

export class PriceListRecordApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllPriceListRecords<
        Params extends PriceListRecordsQueryParams,
        T extends PriceRecord
    >(
        priceListId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/pricelists/${priceListId}/records`, params),
            page,
            limit
        );
        return response.data;
    }

    async upsertPriceListRecords<
        T extends PriceRecordCollectionPut,
        R extends PriceRecord
    >(priceListId: number, priceListRecords: T): Promise<R[]> {
        let result: PriceRecord[] = [];
        for (let i = 0; i < priceListRecords.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                `/v3/pricelists/${priceListId}/records`,
                priceListRecords.slice(i, i + MAX_BATCH_SIZE)
            );
            result.concat(response.data);
        }

        return result as R[];
    }

    async deletePriceListRecords<
        Params extends DeletePriceListRecordsQueryParams
    >(priceListId: number, params?: Params): Promise<void> {
        await this.apiClient.delete(
            appendQueryString(`/v3/pricelists/${priceListId}/records`, params)
        );
    }

    async getPriceListRecordByVariant<T extends PriceRecord>(
        priceListId: number,
        variantId: number,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/pricelists/${priceListId}/records/${variantId}`,
            page,
            limit
        );
        return response.data;
    }

    async getPriceListRecordByCurrencyCode<T extends PriceRecord>(
        priceListId: number,
        variantId: number,
        currencyCode: string,
        page?: number,
        limit?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            `/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
            page,
            limit
        );
        return response.data;
    }

    async setPriceListRecordByCurrencyCode<
        T extends PriceRecordPut,
        R extends PriceRecord
    >(
        priceListId: number,
        variantId: number,
        currencyCode: string,
        priceRecord: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
            priceRecord
        );
        return response.data;
    }

    async deletePriceListRecordByCurrencyCode(
        priceListId: number,
        variantId: number,
        currencyCode: string
    ): Promise<void> {
        await this.apiClient.delete(
            `/v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`
        );
    }
}
