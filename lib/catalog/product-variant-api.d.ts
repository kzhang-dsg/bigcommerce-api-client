/// <reference types="node" />
import { ApiClient } from "../api-client";
import { ProductVariant } from "../model/catalog";
import { Data, FieldAwareQueryParams, Image, PaginatedData } from "../model/common";
import { ReadStream } from "fs";
export declare class ProductVariantApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    getAllVariants<Params extends FieldAwareQueryParams, T extends ProductVariant>(productId: number, params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createVariant<T extends ProductVariant>(productId: number, variant: T): Promise<Data<T>>;
    getVariant<T extends ProductVariant, Params extends FieldAwareQueryParams>(productId: number, variantId: number, params?: Params): Promise<Data<T>>;
    updateVariant<T extends ProductVariant>(productId: number, variant: T): Promise<Data<T>>;
    deleteVariant(productId: number, variantId: number): Promise<void>;
    createVariantImage<T extends Image>(productId: number, variantId: number, image: ReadStream): Promise<Data<T>>;
}
