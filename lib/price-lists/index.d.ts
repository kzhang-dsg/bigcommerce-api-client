import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { PriceList, PriceListPost, PriceListPut } from "../model/generated/price_lists.v3";
import { DeleteAllPriceListsQueryParams, GetPriceListQueryParams, PriceListsQueryParams } from "../model/query/price-list";
import { PriceListAssignmentApi } from "./price-list-assignment-api";
import { PriceListRecordApi } from "./price-list-record-api";
export declare class PriceListsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly priceListAssignments: PriceListAssignmentApi;
    readonly priceListRecords: PriceListRecordApi;
    getAllPriceLists<Params extends PriceListsQueryParams, T extends PriceList>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createPriceList<T extends PriceListPost, R extends PriceList>(priceList: T): Promise<Data<R>>;
    deleteAllPriceLists<Params extends DeleteAllPriceListsQueryParams>(params?: Params): Promise<void>;
    getPriceList<Params extends GetPriceListQueryParams, T extends PriceList>(priceListId: number, params?: Params, page?: number, limit?: number): Promise<Data<T>>;
    updatePriceList<T extends PriceListPut, R extends PriceList>(priceListId: number, priceList: T): Promise<Data<R>>;
}
