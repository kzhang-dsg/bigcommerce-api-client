import { ApiClient } from "../api-client";
import { ProductVariant, VariantsQueryParams } from "../model/catalog";
import { PaginatedData } from "../model/common";
export declare class VariantApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariants<Params extends VariantsQueryParams, T extends ProductVariant>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    batchUpdateVariants<T extends ProductVariant>(variants: ProductVariant[]): Promise<PaginatedData<T>>;
}
