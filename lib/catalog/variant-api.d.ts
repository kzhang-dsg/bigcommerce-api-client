import { ApiClient } from "../api-client";
import { ProductVariant, VariantsQueryParams } from "../model/product";
import { PaginatedData } from "../model/common";
export declare class VariantApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariants<Params extends VariantsQueryParams, T extends ProductVariant>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
}
