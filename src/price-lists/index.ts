import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import {
    PriceList,
    PriceListPost,
    PriceListPut,
} from "../model/generated/price_lists.v3";
import {
    DeleteAllPriceListsQueryParams,
    GetPriceListQueryParams,
    PriceListsQueryParams,
} from "../model/query/price-list";
import { appendQueryString } from "../util";
import { PriceListAssignmentApi } from "./price-list-assignment-api";
import { PriceListRecordApi } from "./price-list-record-api";

export class PriceListsApi {
    constructor(private readonly apiClient: ApiClient) {}

    readonly priceListAssignments = new PriceListAssignmentApi(this.apiClient);
    readonly priceListRecords = new PriceListRecordApi(this.apiClient);

    async getAllPriceLists<
        Params extends PriceListsQueryParams,
        T extends PriceList
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/pricelists", params),
            page,
            limit
        );
        return response.data;
    }

    async createPriceList<T extends PriceListPost, R extends PriceList>(
        priceList: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.post("/v3/pricelists", priceList);
        return response.data;
    }

    async deleteAllPriceLists<Params extends DeleteAllPriceListsQueryParams>(
        params?: Params
    ): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/pricelists", params)
        );
    }

    async getPriceList<
        Params extends GetPriceListQueryParams,
        T extends PriceList
    >(
        priceListId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<Data<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/pricelists/${priceListId}`, params),
            page,
            limit
        );
        return response.data;
    }

    async updatePriceList<T extends PriceListPut, R extends PriceList>(
        priceListId: number,
        priceList: T
    ): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/pricelists/${priceListId}`,
            priceList
        );
        return response.data;
    }
}
