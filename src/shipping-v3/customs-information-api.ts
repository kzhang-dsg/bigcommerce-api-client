import { ApiClient } from "../api-client";
import { PaginatedData } from "../model/common";
import {
    customsInformation,
    customsInformation_request,
} from "../model/generated/shipping.v3";
import { CustomsInformationQueryParams } from "../model/query/shipping";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 50;

export class CustomsInformationApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getCustomsInformation<
        Params extends CustomsInformationQueryParams,
        T extends customsInformation
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(
                `/v3/shipping/products/customs-information`,
                params
            ),
            page,
            limit
        );
        return response.data;
    }

    async deleteCustomsInformation<
        Params extends CustomsInformationQueryParams
    >(params?: Params): Promise<void> {
        await this.apiClient.delete(
            appendQueryString(
                `/v3/shipping/products/customs-information`,
                params
            )
        );
    }

    async upsertCustomsInformation<
        T extends customsInformation_request,
        R extends customsInformation
    >(customsInformation: T[]): Promise<PaginatedData<R>> {
        let result: PaginatedData<R> = { data: [], meta: {} };
        for (let i = 0; i < customsInformation.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                `/v3/shipping/products/customs-information`,
                customsInformation.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data?.concat(response.data.data);
        }

        return result;
    }
}
