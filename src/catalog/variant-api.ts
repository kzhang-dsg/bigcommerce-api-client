import { ApiClient } from "../api-client";
import { ProductVariant, VariantsQueryParams } from "../model/catalog";
import { PaginatedData } from "../model/common";
import { appendQueryString } from "../util";

export class VariantApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariants<
        Params extends VariantsQueryParams,
        T extends ProductVariant
    >(
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/catalog/variants`, params),
            page,
            limit
        );
        return response.data;
    }

    async batchUpdateVariants<T extends ProductVariant>(
        variants?: ProductVariant[],
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.put(
            `/v3/catalog/variants`,
            variants
        );
        return response.data;
    }
}
