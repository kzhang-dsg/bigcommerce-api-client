import { ApiClient } from "../api-client";
import { ProductVariant, VariantsQueryParams } from "../model/product";
import { Data, PaginatedData } from "../model/common";

export class VariantApi {
    constructor(private readonly apiClient: ApiClient) {}

    async getAllVariants<
        Params extends VariantsQueryParams,
        T extends ProductVariant
    >(
        productId: number,
        params?: Params,
        page?: number,
        limit?: number
    ): Promise<PaginatedData<T>> {
        const response = await this.apiClient.get(
            `/v3/catalog/variants`,
            page,
            limit
        );
        return response.data;
    }
}
