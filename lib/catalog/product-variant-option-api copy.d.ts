import { ApiClient } from "../api-client";
import { ProductOptionOptionValue } from "../model/catalog";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
export declare class ProductVariantOptionValueApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariantOptionValues<Params extends FieldAwareQueryParams, T extends ProductOptionOptionValue>(productId: number, optionId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVariantOptionValue<T extends ProductOptionOptionValue>(productId: number, optionId: number, optionValue: T): Promise<Data<T>>;
    getVariantOptionValue<T extends ProductOptionOptionValue, Params extends FieldAwareQueryParams>(productId: number, optionId: number, optionValueId: number, params?: Params): Promise<Data<T>>;
    updateVariantOptionValue<T extends ProductOptionOptionValue>(productId: number, optionId: number, optionValue: T): Promise<Data<T>>;
    deleteVariantOptionValue(productId: number, optionId: number, optionValueId: number): Promise<void>;
}
