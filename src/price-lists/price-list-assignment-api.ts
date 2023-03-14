import { ApiClient } from "../api-client";
import { Data, PaginatedData } from "../model/common";
import {
    AssignmentForGetResponse,
    AssignmentForPutRequest,
    AssignmentForPutResponse,
    CreateBatchPriceListAssignmentsRequest,
    SuccessBatchResponse,
} from "../model/generated/price_lists.v3";
import {
    DeletePriceListAssignmentsQueryParams,
    PriceListAssignmentsQueryParams,
} from "../model/query/price-list";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 25;

export class PriceListAssignmentApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllPriceListAssignments<
        Params extends PriceListAssignmentsQueryParams,
        T extends AssignmentForGetResponse
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString("/v3/pricelists/assignments", params),
            page,
            limit
        );
        return response.data;
    }

    async createPriceListAssignments<
        T extends CreateBatchPriceListAssignmentsRequest,
        R extends SuccessBatchResponse
    >(priceListAssignments: T): Promise<R> {
        let result: SuccessBatchResponse = {};
        for (let i = 0; i < priceListAssignments.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.post(
                "/v3/pricelists/assignments",
                priceListAssignments.slice(i, i + MAX_BATCH_SIZE)
            );
            result = response.data;
        }

        return result as R;
    }

    async deletePriceListAssignments<
        Params extends DeletePriceListAssignmentsQueryParams
    >(params?: Params): Promise<void> {
        await this.apiClient.delete(
            appendQueryString("/v3/pricelists/assignments", params)
        );
    }

    async upsertPriceListAssignment<
        T extends AssignmentForPutRequest,
        R extends AssignmentForPutResponse
    >(priceListId: number, priceListAssignment: T): Promise<Data<R>> {
        const response = await this.apiClient.put(
            `/v3/pricelists/${priceListId}/assignments`,
            priceListAssignment
        );

        return response.data;
    }
}
