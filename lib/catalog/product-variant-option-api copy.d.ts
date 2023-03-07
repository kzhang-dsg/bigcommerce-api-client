import { ApiClient } from "../api-client";
import { ProductOptionValue } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductVariantOptionValueApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariantOptionValues<Params extends FieldAwareQueryParams, T extends ProductOptionValue>(productId: number, optionId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVariantOptionValue<T extends ProductOptionValue>(productId: number, optionId: number, optionValue: T): Promise<Data<T>>;
    getVariantOptionValue<T extends ProductOptionValue, Params extends FieldAwareQueryParams>(productId: number, optionId: number, valueId: number, params?: Params): Promise<Data<T>>;
    updateVariantOptionValue<T extends ProductOptionValue>(productId: number, optionId: number, optionValue: T): Promise<Data<T>>;
    deleteVariantOptionValue(productId: number, optionId: number, valueId: number): Promise<void>;
}
