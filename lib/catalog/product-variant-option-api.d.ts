import { ApiClient } from "../api-client";
import { Data, FieldAwareQueryParams, PaginatedData } from "../model/common";
import { productOption_Full, productOption_Post, productOption_Put } from "../model/generated/catalog.v3";
export declare class ProductVariantOptionApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariantOptions<Params extends FieldAwareQueryParams, T extends productOption_Full>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVariantOption<T extends productOption_Post, R extends productOption_Full>(productId: number, option: T): Promise<Data<R>>;
    getVariantOption<T extends productOption_Full, Params extends FieldAwareQueryParams>(productId: number, optionId: number, params?: Params): Promise<Data<T>>;
    updateVariantOption<T extends productOption_Put, R extends productOption_Full>(productId: number, optionId: number, option: T): Promise<Data<R>>;
    deleteVariantOption(productId: number, optionId: number): Promise<void>;
}
