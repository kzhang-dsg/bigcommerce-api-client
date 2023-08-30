import { ApiClient } from "../api-client";
import { Limit, PaginatedData } from "../model/common";
import { productVariant_Full } from "../model/generated/catalog.v3";
import { VariantsQueryParams } from "../model/query/catalog";
import { appendQueryString } from "../util";

const MAX_BATCH_SIZE = 50;
export class VariantApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariants<
        Params extends VariantsQueryParams,
        T extends productVariant_Full
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/variants`, params),
            page,
            limit || Limit.DEFAULT
        );
        return response.data;
    }

    async batchUpdateVariants<T extends productVariant_Full>(
        variants: T[]
    ): Promise<PaginatedData<T>> {
        let result: PaginatedData<T> = { data: [], meta: {} };
        for (let i = 0; i < variants.length; i += MAX_BATCH_SIZE) {
            const response = await this.apiClient.put(
                `/v3/catalog/variants`,
                variants.slice(i, i + MAX_BATCH_SIZE)
            );
            result.data = result.data?.concat(response.data.data);
        }

        return result;
    }
}
