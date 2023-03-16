import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { SystemLog } from "../model/generated/store_logs.v3";
import { StoreLogsQueryParams } from "../model/query/store-log";
import { appendQueryString } from "../util";

export class StoreLogsApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getStoreLogs<
        Params extends StoreLogsQueryParams,
        T extends SystemLog
    >(params?: Params): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/store/systemlogs`, params)
        );
        return response.data;
    }
}
