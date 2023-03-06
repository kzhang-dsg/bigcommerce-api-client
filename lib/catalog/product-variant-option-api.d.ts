import { ApiClient } from "../api-client";
import { ProductOption } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductVariantOptionApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariantOptions<Params extends FieldAwareQueryParams, T extends ProductOption>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVariantOption<T extends ProductOption>(productId: number, option: T): Promise<Data<T>>;
    getVariantOption<T extends ProductOption, Params extends FieldAwareQueryParams>(productId: number, optionId: number, params?: Params): Promise<Data<T>>;
    updateVariantOption<T extends ProductOption>(productId: number, option: T): Promise<Data<T>>;
    deleteVariantOption(productId: number, optionId: number): Promise<void>;
}
