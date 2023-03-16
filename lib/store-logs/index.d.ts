import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { SystemLog } from "../model/generated/store_logs.v3";
import { StoreLogsQueryParams } from "../model/query/store-log";
export declare class StoreLogsApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getStoreLogs<Params extends StoreLogsQueryParams, T extends SystemLog>(params?: Params): Promise<PaginatedData<T>>;
}
