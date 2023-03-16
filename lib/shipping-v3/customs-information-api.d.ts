import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import { customsInformation, customsInformation_request } from "../model/generated/shipping.v3";
import { CustomsInformationQueryParams } from "../model/query/shipping";
export declare class CustomsInformationApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getCustomsInformation<Params extends CustomsInformationQueryParams, T extends customsInformation>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    deleteCustomsInformation<Params extends CustomsInformationQueryParams>(params?: Params): Promise<void>;
    upsertCustomsInformation<T extends customsInformation_request, R extends customsInformation>(customsInformation: T[]): Promise<PaginatedData<R>>;
}
