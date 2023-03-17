import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { productOptionOptionValue_Base, productOptionOptionValue_Full } from "../model/generated/catalog.v3";
export declare class ProductVariantOptionValueApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariantOptionValues<Params extends FieldAwareQueryParams, T extends productOptionOptionValue_Full>(productId: number, optionId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVariantOptionValue<T extends productOptionOptionValue_Base, R extends productOptionOptionValue_Full>(productId: number, optionId: number, optionValue: T): Promise<Data<R>>;
    getVariantOptionValue<T extends productOptionOptionValue_Full, Params extends FieldAwareQueryParams>(productId: number, optionId: number, valueId: number, params?: Params): Promise<Data<T>>;
    updateVariantOptionValue<T extends productOptionOptionValue_Base>(productId: number, optionId: number, optionValueId: number, optionValue: T): Promise<Data<T>>;
    deleteVariantOptionValue(productId: number, optionId: number, valueId: number): Promise<void>;
}
