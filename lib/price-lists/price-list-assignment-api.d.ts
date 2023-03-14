import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import { AssignmentForGetResponse, AssignmentForPutRequest, AssignmentForPutResponse, CreateBatchPriceListAssignmentsRequest, SuccessBatchResponse } from "../model/generated/price_lists.v3";
import { DeletePriceListAssignmentsQueryParams, PriceListAssignmentsQueryParams } from "../model/query/price-list";
export declare class PriceListAssignmentApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllPriceListAssignments<Params extends PriceListAssignmentsQueryParams, T extends AssignmentForGetResponse>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createPriceListAssignments<T extends CreateBatchPriceListAssignmentsRequest, R extends SuccessBatchResponse>(priceListAssignments: T): Promise<R>;
    deletePriceListAssignments<Params extends DeletePriceListAssignmentsQueryParams>(params?: Params): Promise<void>;
    upsertPriceListAssignment<T extends AssignmentForPutRequest, R extends AssignmentForPutResponse>(priceListId: number, priceListAssignment: T): Promise<Data<R>>;
}
