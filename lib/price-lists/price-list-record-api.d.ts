import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { PriceRecord, PriceRecordCollectionPut, PriceRecordPut } from "../model/generated/price_lists.v3";
import { DeletePriceListRecordsQueryParams, PriceListRecordsQueryParams } from "../model/query/price-list";
export declare class PriceListRecordApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllPriceListRecords<Params extends PriceListRecordsQueryParams, T extends PriceRecord>(priceListId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    upsertPriceListRecords<T extends PriceRecordCollectionPut, R extends PriceRecord>(priceListId: number, priceListRecords: T): Promise<R[]>;
    deletePriceListRecords<Params extends DeletePriceListRecordsQueryParams>(priceListId: number, params?: Params): Promise<void>;
    getPriceListRecordByVariant<T extends PriceRecord>(priceListId: number, variantId: number, page?: number, limit?: number): Promise<PaginatedData<T>>;
    getPriceListRecordByCurrencyCode<T extends PriceRecord>(priceListId: number, variantId: number, currencyCode: string, page?: number, limit?: number): Promise<Data<T>>;
    setPriceListRecordByCurrencyCode<T extends PriceRecordPut, R extends PriceRecord>(priceListId: number, variantId: number, currencyCode: string, priceRecord: T): Promise<Data<R>>;
    deletePriceListRecordByCurrencyCode(priceListId: number, variantId: number, currencyCode: string): Promise<void>;
}
